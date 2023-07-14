
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';




const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <SigninScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <NewPasswordScreen />
    </NavigationContainer>
  );
};

export default Navigation;
