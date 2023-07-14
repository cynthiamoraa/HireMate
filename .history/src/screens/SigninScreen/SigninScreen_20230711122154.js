import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View >
      <Image source={LOGO} className="r" />
    </View>
  );
};

export default SigninScreen;
