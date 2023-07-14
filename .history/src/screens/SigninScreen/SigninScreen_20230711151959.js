import React from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';

const SigninScreen = () => {
  return (
    <View className="items-center ">
      <view>
        <Image
          source={LOGO}
          className="object-contain w-50% max-w-100  h-30vh"
        />
      </div

      <CustomInput />
    </View>
  );
};

export default SigninScreen;
