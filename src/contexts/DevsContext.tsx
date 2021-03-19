/* eslint-disable camelcase */
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import githubApi from '../services/githubApi';
import { useStorageStateContext } from './StorageStateContext';
import { useToastContext } from './ToastContext';

export interface DevProps {
  login: string;
  id: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  latitude: number;
  longitude: number;
}

interface DevsContextData {
  devList: DevProps[];
  addNewDev: (userName: string) => Promise<void>;
}

interface DevsProviderProps {
  children: ReactNode;
}

const DevsContext = createContext({} as DevsContextData);

function DevsContextProvider({ children }: DevsProviderProps) {
  const { storeState, getState } = useStorageStateContext();
  const [devList, setDevList] = useState<DevProps[]>([]);
  const { dispatchToast } = useToastContext();

  async function addNewDev(userName: string) {
    try {
      const { data } = await githubApi.get(`users/${userName}`);
      const newDev = {
        ...data,
        id: uuid(),
        latitude: Number(faker.address.latitude()),
        longitude: Number(faker.address.longitude()),
      };

      setDevList(oldDevList => [...oldDevList, newDev]);
      dispatchToast({
        message: 'User added with success',
        type: 'success',
      });
    } catch {
      dispatchToast({
        message: 'User not found',
        type: 'error',
      });
    }
  }

  useEffect(() => {
    async function storeDevListSate() {
      storeState({ devList });
    }
    storeDevListSate();
  }, [devList, storeState]);

  useEffect(() => {
    async function loadStorageData() {
      const savedDevList = await getState<DevProps[]>(
        Object.keys({ devList })[0], // get the variable key to not pass hardcoded key
      );

      if (savedDevList) {
        setDevList(savedDevList);
      }
    }
    loadStorageData();
  }, []); // eslint-disable-line

  return (
    <DevsContext.Provider value={{ devList, addNewDev }}>
      {children}
    </DevsContext.Provider>
  );
}

function useDevsContext(): DevsContextData {
  const context = useContext(DevsContext);
  return context;
}

export { DevsContextProvider, useDevsContext };
