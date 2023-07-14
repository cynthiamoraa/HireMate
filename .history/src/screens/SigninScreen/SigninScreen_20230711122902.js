import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View>
      <Image source={LOGO} className="w-0 h-40 object-contain" />
    </View>
  );
};

export default SigninScreen;
