import React, { ReactNode } from 'react';
import { ToastProvider } from 'react-native-fast-toast';
import { SizeContextProvider } from './SizeContext';
import { StorageStateContextProvider } from './StorageStateContext';
import { DevsContextProvider } from './DevsContext';
import { AuthContextProvider } from './AuthContext';
import { ToastContextProvider } from './ToastContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppContextsProvider = ({ children }: AppProviderProps) => (
  <SizeContextProvider>
    <ToastProvider placement="bottom">
      <ToastContextProvider>
        <StorageStateContextProvider>
          <AuthContextProvider>
            <DevsContextProvider>{children}</DevsContextProvider>
          </AuthContextProvider>
        </StorageStateContextProvider>
      </ToastContextProvider>
    </ToastProvider>
  </SizeContextProvider>
);

export default AppContextsProvider;
