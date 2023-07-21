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
      <T.Navigator screenOptions={{headerShown: false}}>
        <T.Screen name="Signin" component={SigninScreen} />
        <T.Screen name="SignUp" component={SignUpScreen} />
        <T.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <T.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <T.Screen name="NewPassword" component={NewPasswordScreen} />
        <T.Screen name="Home" component={HomeScreen} />
      </T.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;