/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useContext } from 'react';
import { useWindowDimensions } from 'react-native';

interface SizeContextData {
  isSmallScreen: boolean;
}
interface StorageStateProviderProps {
  children: ReactNode;
}

const SizeContext = createContext({} as SizeContextData);

function SizeContextProvider({ children }: StorageStateProviderProps) {
  const window = useWindowDimensions();

  return (
    <SizeContext.Provider
      value={{
        isSmallScreen: window.width <= 1024,
      }}
    >
      {children}
    </SizeContext.Provider>
  );
}

function useSizeContext(): SizeContextData {
  const context = useContext(SizeContext);

  return context;
}

export { SizeContextProvider, useSizeContext };
