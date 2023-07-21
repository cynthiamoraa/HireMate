import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import Navigation from '../navigation';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
