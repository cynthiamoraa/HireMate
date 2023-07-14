import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View className="bg-slate-500">
      <Image source={LOGO} className="h-100 w-80" />
    </View>
  );
};

export default SigninScreen;
