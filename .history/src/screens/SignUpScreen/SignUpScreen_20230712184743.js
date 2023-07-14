import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.log('Sign up button pressed');
  };

  const onSignInPressed = ()=>{
    console.log('Sign up button pressed');
  };
  const onTermsOfUsePressed = ()=>{
    console.log('Terms of use button pressed');
  };
  const onPrivacyPressed = ()=>{
    console.log('Privacy button pressed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-white h-screen">
        <View className="items-center  ">
          <Text className="font-bold text-[#051c68] mt-15 text-2xl">
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
        <Text className="text-gray-500 my-1 mx-2">
          By registering confirm that you accept our{' '}
          <Text className="text-[#FDB075]" onPress={onTermsOfUsePressed}>Terms of use</Text> and{' '}
          <Text className="text-[#FDB075]" onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>
        

        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignInPressed}
          bgColor="#fff"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
