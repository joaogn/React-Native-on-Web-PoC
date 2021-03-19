import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import githubApi from '../../services/githubApi';
import validGithubUser from '../../__mocks__/validGithubUser';

import {
  useDevsContext,
  DevsContextProvider,
} from '../../contexts/DevsContext';

const apiMock = new MockAdapter(githubApi);

const mockedStoreState = jest.fn();
const mockedGetState = jest.fn();
const mockLatitude = 20;
const mockLongitude = 20;
const mockUUID = '79995173-44f1-4a3e-9b9b-906bebd76ed4';

jest.mock('faker', () => ({
  address: {
    longitude: jest.fn(() => mockLongitude),
    latitude: jest.fn(() => mockLongitude),
  },
}));

jest.mock('uuid', () => ({
  v4: () => mockUUID,
}));

jest.mock('../../contexts/StorageStateContext', () => {
  return {
    useStorageStateContext: () => ({
      storeState: mockedStoreState,
      getState: mockedGetState,
    }),
  };
});

const mockedDispatchToast = jest.fn();

jest.mock('../../contexts/ToastContext', () => {
  return {
    useToastContext: () => ({
      dispatchToast: mockedDispatchToast,
    }),
  };
});

describe('Devs context', () => {
  it('should able add a new dev and dispatch an toast with success', async () => {
    apiMock.onGet(`users/${validGithubUser.login}`).reply(200, validGithubUser);
    const { result, waitForNextUpdate } = renderHook(() => useDevsContext(), {
      wrapper: DevsContextProvider,
    });

    result.current.addNewDev(validGithubUser.login);

    const expected = [
      {
        ...validGithubUser,
        id: mockUUID,
        latitude: mockLatitude,
        longitude: mockLongitude,
      },
    ];

    await waitForNextUpdate();
    expect(result.current.devList).toEqual(expected);
    expect(mockedStoreState).toHaveBeenLastCalledWith({ devList: expected });
    expect(mockedDispatchToast).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: 'success' }),
    );
  });

  it('should able add a new dev when api returns error show an toast with error', async () => {
    apiMock.onGet(`users/invalid`).reply(400, 'error');

    const { result, waitFor } = renderHook(() => useDevsContext(), {
      wrapper: DevsContextProvider,
    });

    result.current.addNewDev('invalid');

    await waitFor(() => {
      expect(mockedDispatchToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'error' }),
      );
    });
  });

  it('should restore saved data from storage when devs inits', async () => {
    const expected = [
      {
        ...validGithubUser,
        id: mockUUID,
        latitude: mockLatitude,
        longitude: mockLongitude,
      },
    ];

    mockedGetState.mockResolvedValue(() => expected);

    const { result, waitForNextUpdate } = renderHook(() => useDevsContext(), {
      wrapper: DevsContextProvider,
    });

    await waitForNextUpdate();
    expect(result.current.devList).toEqual(expected);
  });
});
