import { View, Text } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import WalletScreen from '../WalletScreen/WalletScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <>
    <View>
      <Text>HomeScreen</Text>
    </View>  
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

