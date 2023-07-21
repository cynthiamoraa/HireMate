import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WalletScreen from '../screens/WalletScreen/WalletScreen';
import ProfileScreen from '../screens/WalletScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Signin" component={SigninScreen} />
        <Tab.Screen name="SignUp" component={SignUpScreen} />
        <Tab.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Tab.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Tab.Screen name="NewPassword" component={NewPasswordScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;