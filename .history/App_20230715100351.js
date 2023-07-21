/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import Navigation from './src/navigation';
import BottomNavigation from './bottomnavigation';

function App() {
  return (
    <SafeAreaView className="flex-1" >
      <Navigation />
      <BottomNavigation />
    </SafeAreaView>
  );
}

export default App;
