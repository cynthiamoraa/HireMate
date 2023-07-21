import React from 'react';
import 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarIcon}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
};

export default BottomNavigation;
