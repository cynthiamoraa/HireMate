import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="items-center ">
      <Image source={LOGO} className="object-contain w-70%" />
    </View>
  );
};

export default SigninScreen;
