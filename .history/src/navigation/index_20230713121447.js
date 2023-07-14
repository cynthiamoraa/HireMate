
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
};

export default Navigation;
