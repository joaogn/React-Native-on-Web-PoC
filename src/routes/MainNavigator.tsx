import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import Home from '../screens/Home';
import AddNewUserScreen from '../screensMobile/AddNewUserScreen';
import CardListScreen from '../screensMobile/CardListScreen';

const MainStack = createStackNavigator();

function MainNavigator() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTintColor: theme.white,
        headerStyle: { backgroundColor: theme.primary },
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="AddNewUser"
        options={{
          headerTitle: t('add'),
        }}
        component={AddNewUserScreen}
      />
      <MainStack.Screen
        name="DevList"
        options={{
          headerTitle: t('developers'),
        }}
        component={CardListScreen}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
