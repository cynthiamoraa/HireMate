import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <View>
      <Text>HomeNavigation</Text>
    </View>
  )
}

export default HomeNavigation