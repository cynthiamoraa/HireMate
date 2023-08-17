/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import Navigation from './src/navigation/AuthNavigator';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <AuthProvider className="flex-1">
      <SafeAreaView className="flex-1" >
        <Navigation />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
