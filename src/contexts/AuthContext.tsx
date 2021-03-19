/* eslint-disable camelcase */
import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useStorageStateContext } from './StorageStateContext';
import { useToastContext } from './ToastContext';

import githubApi from '../services/githubApi';

export interface UserProps {
  login: string;
  id: number;
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

interface SignInCredentials {
  userName: string;
}

interface AuthContextData {
  loading: boolean;
  user: UserProps | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const { storeState, getState } = useStorageStateContext();
  const { dispatchToast } = useToastContext();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps | null>(null);

  async function signIn({ userName }: SignInCredentials) {
    setLoading(true);

    Geolocation.getCurrentPosition(
      async locationData => {
        try {
          const { data } = await githubApi.get(`users/${userName}`);

          const newUser = {
            ...data,
            latitude: locationData.coords.latitude,
            longitude: locationData.coords.longitude,
          };

          setUser(newUser);
        } catch {
          dispatchToast({
            message: 'User not found',
            type: 'error',
          });
        }
        setLoading(false);
      },
      () => {
        dispatchToast({ message: 'Location must be available', type: 'error' });
        setLoading(false);
      },
    );
  }

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      const storedUser = await getState<UserProps>(Object.keys({ user })[0]);

      if (!storedUser) {
        setUser(null);
      }
      setUser(storedUser);

      setLoading(false);
    }
    loadStorageData();
  }, []); // eslint-disable-line

  useEffect(() => {
    async function storeDevListSate() {
      storeState({ user });
    }
    storeDevListSate();
  }, [user, storeState]);

  const signOut = useCallback(async () => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContextProvider, useAuthContext };
