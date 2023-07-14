/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import SigninScreen from './src/screens/SigninScreen';
import Navigation from './src/Navigation';

function App() {
  return (
    <SafeAreaView>
      <SigninScreen />
    </SafeAreaView>
  );
}

export default App;