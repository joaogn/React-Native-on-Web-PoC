import { renderHook } from '@testing-library/react-hooks';

import {
  useStorageStateContext,
  StorageStateContextProvider,
} from '../../contexts/StorageStateContext';

let mockedGetItem: jest.Mock<any, any>;
let mockedSetItem: jest.Mock<any, any>;

jest.mock('@react-native-async-storage/async-storage', () => {
  const mockedGetItemInstace = jest.fn().mockResolvedValue(`{"test":"test"}`);
  const mockedSetItemInstace = jest.fn();
  mockedGetItem = mockedGetItemInstace;
  mockedSetItem = mockedSetItemInstace;
  return {
    getItem: mockedGetItemInstace,
    setItem: mockedSetItemInstace,
  };
});

const STORAGE_KEY = '@storage_Key';

describe('Storage context', () => {
  it('should getAll items from storage', async () => {
    const { result } = renderHook(() => useStorageStateContext(), {
      wrapper: StorageStateContextProvider,
    });

    await result.current.getAllStates();
    expect(mockedGetItem).toBeCalledWith(STORAGE_KEY);
  });

  it('should get old content and save together a new content on storage', async () => {
    const { result } = renderHook(() => useStorageStateContext(), {
      wrapper: StorageStateContextProvider,
    });

    const oldObject = { test: 'test' };
    const objectToSave = { test2: 'test2' };

    await result.current.storeState(objectToSave);

    expect(mockedSetItem).toBeCalledWith(
      STORAGE_KEY,
      JSON.stringify({ ...oldObject, ...objectToSave }),
    );
  });

  it('should get especifc item by key', async () => {
    mockedGetItem.mockResolvedValue(`{"test":"test","toGet":"toGet"}`);
    const { result } = renderHook(() => useStorageStateContext(), {
      wrapper: StorageStateContextProvider,
    });

    const response = await result.current.getState<string>('toGet');

    expect(mockedGetItem).toBeCalledWith(STORAGE_KEY);

    expect(response).toEqual('toGet');
  });
});
