import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainScreenTab from "../screens/feature/core/MainScreen.tab";
import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      <Stack.Screen name="Root" component={MainScreenTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
