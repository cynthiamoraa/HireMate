import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="p-20">
      <Image source={LOGO} className="w-30 h-40 object-contain" />
    </View>
  );
};

export default SigninScreen;
