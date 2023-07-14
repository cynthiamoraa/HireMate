import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="items-center p-20">
      <Image source={LOGO} className="object-contain w-70% max-w-300  h-0vh" />
    </View>
  );
};

export default SigninScreen;
