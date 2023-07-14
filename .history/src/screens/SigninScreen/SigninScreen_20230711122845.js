import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';

const SigninScreen = () => {
  return (
    <View>
      <Image source={LOGO} className="w-70 h-60 object-co" />
    </View>
  );
};

export default SigninScreen;
