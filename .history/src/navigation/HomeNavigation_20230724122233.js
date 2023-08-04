import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FindWorkScreen from '../screens/FindWorkScreen/FindWorkScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Find" component={SigninScreen} />

    </Stack.Navigator>
  );
}

export default HomeNavigation