import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuthContext } from '../contexts/AuthContext';

export default function Navigation() {
  const { user } = useAuthContext();
  const linking = {
    prefixes: ['https://localhost:3000', 'localhost://'],
    config: {
      screens: {
        Login: '/login',
        Home: '/',
        Chart: '/chart',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
