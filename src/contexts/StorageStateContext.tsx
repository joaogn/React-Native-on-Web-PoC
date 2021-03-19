import React, { createContext, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

/*
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';

if (process.env.NODE_ENV === 'development' && Platform.OS !== 'web') {
  RNAsyncStorageFlipper(AsyncStorage);
}
*/

interface StorageStateContextData {
  storeState: ({ state }: any) => Promise<void>;
  getAllStates: () => Promise<any[]>;
  getState: <S>(keyName: string) => Promise<S>;
}
interface StorageStateProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = '@storage_Key';

const StorageStateContext = createContext({} as StorageStateContextData);

function StorageStateContextProvider({ children }: StorageStateProviderProps) {
  async function getAllStates() {
    const stringStates = await AsyncStorage.getItem(STORAGE_KEY);
    return stringStates !== null ? JSON.parse(stringStates) : {};
  }

  async function storeState(state: any) {
    const states = await getAllStates();
    const newStates = { ...states, ...state };
    const stringnewStates = JSON.stringify(newStates);
    await AsyncStorage.setItem(STORAGE_KEY, stringnewStates);
  }

  async function getState<S>(keyName: string): Promise<S> {
    const states = await getAllStates();
    return states[keyName] as S;
  }

  return (
    <StorageStateContext.Provider
      value={{ storeState, getAllStates, getState }}
    >
      {children}
    </StorageStateContext.Provider>
  );
}

function useStorageStateContext(): StorageStateContextData {
  const context = useContext(StorageStateContext);

  return context;
}

export { StorageStateContextProvider, useStorageStateContext };
