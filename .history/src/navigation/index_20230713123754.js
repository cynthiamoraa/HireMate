
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import { View } from 'react-native';
// import SignUpScreen from '../screens/SignUpScreen';
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
