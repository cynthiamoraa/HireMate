
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigator';
import {AuthProvider } from '../context/AuthContext';
import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import FindWorkScreen from '../screens/FindWorkScreen';
import HireTalentScreen from '../screens/HireTalentScreen';
import LearnMoreScreen from '../screens/LearnMoreScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Navigation;
