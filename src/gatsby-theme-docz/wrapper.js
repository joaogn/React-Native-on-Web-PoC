import React from 'react';
import ThemeProvider from '../../../src/styles/ThemeProvider';
import GlobalStyle from '../../../src/styles/Global';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default ({ children }) => {
  const AppStack = createStackNavigator();
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div>{children}</div>
    </ThemeProvider>
  );
};
