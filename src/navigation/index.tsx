import {NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import {QueryClientProvider} from 'react-query';

import {RootStackParamList} from '../../types';
import MainScreenTab from '../feature/core/MainScreen.tab';
import queryClient from '../helper/QueryClient';

const DefaultTheme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#000000',
    card: '#FFFFFF',
    border: '#D8D8D8',
    notification: '#FF0000',
  },
};

const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#FFFFFF',
    card: '#000000',
    border: '#ffffff',
    notification: '#FF0000',
  },
};

export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName}) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={MainScreenTab} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
