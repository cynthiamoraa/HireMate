import { View, Text } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};


import WalletScreen from '../WalletScreen/WalletScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default HomeScreen;
