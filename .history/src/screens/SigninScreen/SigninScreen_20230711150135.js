import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';

const SigninScreen = () => {
  return (
    <View className="items-center p-20">
      <Image source={LOGO} className="object-contain w-70%  h-30vh" />
      <CustomInput />
    </View>
  );
};

export default SigninScreen;
