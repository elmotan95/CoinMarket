import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoverScreen from "../discover/Discover.screen";
import MarketListScreen from "../market/MarketList.screen";
import WalletScreen from "../financial/Wallet.screen";
import {MainScreenTabParamList} from "../../../types";
import Icon from "../../../components/Icon";

const Tab = createBottomTabNavigator<MainScreenTabParamList>();

const MainScreenTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon size={20} name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketListScreen}
        options={{
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon size={20} name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon size={20} name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreenTab;
