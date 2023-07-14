import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = ()=>{
    console.log('Sign in button pressed');
  };

  const onForgotPasswordPressed = ()=>{
    console.log('Forgot password button pressed');
  };

  const onSignInGoogle = ()=>{
    console.log('Sign in with google button pressed');
  };
  const onSignInApple = ()=>{
    console.log('Sign in with apple button pressed');
  };
  const onSignInEmail = ()=>{
    console.log('Sign in with email button pressed');
  };
  const onSignUpPressed = ()=>{
    console.log('Sign up button pressed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-white h-screen">
        <View className="items-center  ">
          <Text className="font-bold text-[#051c68] m-5 text-2xl">Create an Account</Text>
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
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#E7EAF4"
          textColor={'#4765A9'}
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#FAE9EA"
          textColor={'#DD4D44'}
        />
        <CustomButton
          text="Sign In with email"
          onPress={onSignInEmail}
          bgColor="#E3E3E3"
          textColor={'#363636'}
        />
        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={onSignUpPressed}
          bgColor="#fff"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
