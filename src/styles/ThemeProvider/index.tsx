import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import { ThemeProvider as ThemeProviderWeb } from 'styled-components';
import { ThemeProvider as ThemeProviderNative } from 'styled-components/native';
import { defaultTheme } from '../theme';

interface ThemeProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProps) => {
  if (Platform.OS === 'web') {
    return (
      <ThemeProviderNative theme={defaultTheme}>
        <ThemeProviderWeb theme={defaultTheme}>{children}</ThemeProviderWeb>
      </ThemeProviderNative>
    );
  }
  return (
    <ThemeProviderNative theme={defaultTheme}>{children}</ThemeProviderNative>
  );
};
export default ThemeProvider;
