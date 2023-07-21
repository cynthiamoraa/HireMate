import { View, Text } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import WalletScreen from '../WalletScreen/WalletScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (

    <View>
      <Text>HomeScreen</Text>
    </View>  
   
  );
};

export default HomeScreen;

