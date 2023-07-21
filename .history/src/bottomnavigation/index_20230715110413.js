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
      <.Navigator screenOptions={{headerShown: false}}>
        <.Screen name="Signin" component={SigninScreen} />
        <.Screen name="SignUp" component={SignUpScreen} />
        <.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <.Screen name="NewPassword" component={NewPasswordScreen} />
        <.Screen name="Home" component={HomeScreen} />
      </.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;