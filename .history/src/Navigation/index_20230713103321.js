import { Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Navigation = () => {
  return (
    <NavigationContainer>
      <Text>Navigation</Text>
    </NavigationContainer>
  );
};

export default Navigation;
