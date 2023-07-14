import React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="items-center p-20">
      <Image source={LOGO} className="object-cover w-70% max-w-300  h-screen max-h-[200]" />
    </View>
  );
};

export default SigninScreen;
