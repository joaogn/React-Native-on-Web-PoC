import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import SignIn from '../screens/SignIn';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  const theme = useTheme();
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        headerTintColor: theme.white,
        headerStyle: { backgroundColor: theme.primary },
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
