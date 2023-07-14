import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className>
      <Image source={LOGO} className="object-contain" />
    </View>
  );
};

export default SigninScreen;
