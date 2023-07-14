import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
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
          <Text className="font-bold text-[#051c68] m-5 text-2xl">
            Create an Account
          </Text>
        </View>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <Text className="text-gray-500 my-10 mx-2">
          By registering confirm that you accept our{' '}
          <Text className="text-[#FDB075]" onPress={onTermsOfUsePressed}>Terms of use</Text> and{' '}
          <Text className="text-[#FDB075]">Privacy Policy</Text>
        </Text>
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
