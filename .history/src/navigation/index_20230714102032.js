
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Sta
      {/* <SigninScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <NewPasswordScreen />
    </NavigationContainer>
  );
};

export default Navigation;
