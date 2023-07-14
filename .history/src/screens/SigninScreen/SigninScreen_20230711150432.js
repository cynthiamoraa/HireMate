import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/H.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';

const SigninScreen = () => {
  return (
    <View className="items-center ">
      <Image source={LOGO} className="object-contain w-70% max-w-300  h-30vh" />
      <CustomInput />
    </View>
  );
};

export default SigninScreen;
