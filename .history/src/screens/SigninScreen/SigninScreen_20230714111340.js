import React,{useState} from 'react';

import {View, Image, ScrollView} from 'react-native';
import LOGO from '../../../assets/images/Logo1.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = ()=>{
    console.log('Sign in button pressed');
  };

  const onForgotPasswordPressed = ()=>{
    console.log('Forgot password button pressed');
  };

  const onSignUpPressed = ()=>{
    console.log('Sign up button pressed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-white h-screen">
        <View className="items-center  ">
          <Image source={LOGO} className=" w-54 h-44" />
        </View>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          // bgColor="bg-[#3D7DEB]"
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          bgColor="#fff"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={onSignUpPressed}
          bgColor="#fff"
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;
