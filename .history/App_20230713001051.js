/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
// import SigninScreen from './src/screens/SigninScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';

function App() {
  return (
    <SafeAreaView>
      <NewPasswordScreen />
    </SafeAreaView>
  );
}

export default App;
