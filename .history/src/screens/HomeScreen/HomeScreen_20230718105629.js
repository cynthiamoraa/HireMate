import { View, Text } from 'react-native';
import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WalletScreen from '../WalletScreen/WalletScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

  );
};

export default HomeScreen;
