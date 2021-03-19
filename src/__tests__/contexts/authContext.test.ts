import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import githubApi from '../../services/githubApi';
import validGithubUser from '../../__mocks__/validGithubUser';

import {
  useAuthContext,
  AuthContextProvider,
} from '../../contexts/AuthContext';

const apiMock = new MockAdapter(githubApi);

const mockedStoreState = jest.fn();
const mockedGetState = jest.fn();

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

jest.mock('@react-native-community/geolocation', () => {
  return {
    getCurrentPosition: jest
      .fn((success, error) =>
        success({
          coords: { latitude: 10, longitude: 10 },
        }),
      )
      .mockImplementationOnce((success, error) =>
        success({
          coords: { latitude: 10, longitude: 10 },
        }),
      )
      .mockImplementationOnce((success, error) => error('error')),
  };
});

describe('Auth context', () => {
  it('should able to sign in and storage user', async () => {
    apiMock.onGet(`users/${validGithubUser.login}`).reply(200, validGithubUser);
    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper: AuthContextProvider,
    });

    result.current.signIn({
      userName: validGithubUser.login,
    });

    const expected = {
      ...validGithubUser,
      latitude: 10,
      longitude: 10,
    };

    await waitForNextUpdate();
    expect(result.current.user).toEqual(expected);
    expect(mockedStoreState).toHaveBeenLastCalledWith({ user: expected });
  });
  // need be the second test because the mock Geolocation, this only I find do work
  // the mock with success and error callback
  it('should able dispatch a toast error if get location is not activate', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper: AuthContextProvider,
    });

    result.current.signIn({
      userName: validGithubUser.login,
    });

    await waitForNextUpdate();
    expect(mockedDispatchToast).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: 'error' }),
    );
  });

  it('should able dispatch a toast error if sign in request is wrong', async () => {
    apiMock.onGet(`users/${validGithubUser.login}`).reply(400, 'error');
    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper: AuthContextProvider,
    });

    result.current.signIn({
      userName: validGithubUser.login,
    });

    await waitForNextUpdate();
    expect(mockedDispatchToast).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: 'error' }),
    );
  });

  it('should restore saved data from storage when auth inits', async () => {
    const expected = {
      ...validGithubUser,
      latitude: 10,
      longitude: 10,
    };

    mockedGetState.mockResolvedValue(() => expected);

    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper: AuthContextProvider,
    });

    await waitForNextUpdate();
    expect(result.current.user).toEqual(expected);
  });

  it('should able to sign out saved user with undefined on storage', async () => {
    const expected = {
      ...validGithubUser,
      latitude: 10,
      longitude: 10,
    };

    mockedGetState.mockResolvedValue(() => expected);

    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper: AuthContextProvider,
    });

    await waitForNextUpdate();

    expect(result.current.user).toEqual(expected);
    act(() => {
      result.current.signOut();
    });
    expect(result.current.user).toEqual(null);
    expect(mockedStoreState).toHaveBeenLastCalledWith({ user: null });
  });
});
