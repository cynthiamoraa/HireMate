/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
impo
import {SafeAreaView} from 'react-native';

import Navigation from './src/navigation/AuthNavigator';


function App() {
  return (
    <SafeAreaView className="flex-1" >
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
