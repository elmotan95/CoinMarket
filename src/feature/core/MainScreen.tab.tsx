import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

import DiscoverScreen from '../discover/Discover.screen';
import MarketListScreen from '../market/MarketList.screen';
import WalletScreen from '../financial/Wallet.screen';
import {MainScreenTabParamList} from '../../../types';
import Icon from '../../components/Icon';

const Tab = createBottomTabNavigator<MainScreenTabParamList>();

const MainScreenTab = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarActiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({color}) => <Icon size={20} name="newspaper-o" color={color} />,
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketListScreen}
        options={{
          tabBarActiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({color}) => <Icon size={20} name="bar-chart" color={color} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarActiveTintColor: colors.text,
          headerShown: false,
          tabBarIcon: ({color}) => <Icon size={20} name="google-wallet" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreenTab;
