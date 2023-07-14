import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="items-center p-20">
      <Image source={LOGO} className="object- w-70% h-100" />
    </View>
  );
};

export default SigninScreen;
