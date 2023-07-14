
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import { SafeAreaView } from 'react-native';
// import SignUpScreen from '../screens/SignUpScreen';
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView className="">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={SigninScreen}
            options={{title: 'Overview'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
