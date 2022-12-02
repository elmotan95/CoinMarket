/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainScreenTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type MainScreenTabParamList = {
  Discover: undefined;
  Market: undefined;
  Wallet: undefined;
};

export type RootTabScreenProps<Screen extends keyof MainScreenTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainScreenTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
