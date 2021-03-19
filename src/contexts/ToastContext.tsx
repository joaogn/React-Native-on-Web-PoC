/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useContext } from 'react';
import { toast as toastWeb, ToastContainer } from 'react-toastify';
import { useToast } from 'react-native-fast-toast';
import { Platform } from 'react-native';
import { v4 as uuid } from 'uuid';
import { useTheme } from 'styled-components/native';
import CloseIcon from '../assets/icons/close.svg';
import { useSizeContext } from './SizeContext';

type TypeFastToast = 'success' | 'warning' | 'normal' | 'danger' | undefined;

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

interface ToastContextData {
  dispatchToast(message: Omit<ToastMessage, 'id'>): void;
}
interface StorageStateProviderProps {
  children: ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

function ToastContextProvider({ children }: StorageStateProviderProps) {
  const toastMobile = useToast();
  const theme = useTheme();
  const { isSmallScreen } = useSizeContext();

  function tansformTypeToFastToastType(
    type: 'success' | 'error' | 'info' | 'warning',
  ): TypeFastToast {
    if (type === 'error') {
      return 'danger';
    }
    if (type === 'info') {
      return 'normal';
    }
    return type;
  }

  function dispatchToast({ type, message }: Omit<ToastMessage, 'id'>) {
    const id = uuid();
    if (Platform.OS === 'web' && !isSmallScreen) {
      // the color is changed on  globalStyle
      toastWeb(message, {
        position: 'top-right',
        autoClose: 5000,
        type,
        toastId: id,
        style: { fontSize: 14 },
      });
      return;
    }

    const toastType: TypeFastToast = tansformTypeToFastToastType(type);

    toastMobile &&
      toastMobile.show(message, {
        id,
        type: toastType,
        duration: 5000,
        dangerColor: theme.red,
        icon: (
          <CloseIcon
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill={theme.white}
          />
        ),
        style: { width: '80%' },
        onPress: () => {
          toastMobile.hide(id);
        },
      });
  }

  return (
    <ToastContext.Provider
      value={{
        dispatchToast,
      }}
    >
      {Platform.OS === 'web' && <ToastContainer />}
      {children}
    </ToastContext.Provider>
  );
}

function useToastContext(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}

export { ToastContextProvider, useToastContext };
