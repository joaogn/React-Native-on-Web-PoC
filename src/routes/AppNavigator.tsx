import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import MainNavigator from './MainNavigator';
import ChartScreen from '../screens/Chart';
import WorldIcon from '../assets/icons/world.svg';
import ChartIcon from '../assets/icons/leaderboard.svg';
import { useSizeContext } from '../contexts/SizeContext';

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

function AppNavigator() {
  const { isSmallScreen } = useSizeContext();
  const theme = useTheme();

  if (Platform.OS === 'web' && !isSmallScreen) {
    return (
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen
          name="Home"
          component={MainNavigator}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.background },
          }}
        />
        <AppStack.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: theme.background },
          }}
        />
      </AppStack.Navigator>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <AppBottomTab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: theme.background }}
        tabBarOptions={{
          showLabel: false,
          activeBackgroundColor: theme.primary,
          labelStyle: { color: theme.white, fontSize: 12 },
          style: {
            backgroundColor: theme.background,
          },
        }}
      >
        <AppBottomTab.Screen
          name="Home"
          component={MainNavigator}
          options={{
            tabBarIcon: () => (
              <WorldIcon
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill={theme.white}
              />
            ),
          }}
        />
        <AppBottomTab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            tabBarIcon: () => (
              <ChartIcon
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill={theme.white}
              />
            ),
          }}
        />
      </AppBottomTab.Navigator>
    </View>
  );
}

export default AppNavigator;
