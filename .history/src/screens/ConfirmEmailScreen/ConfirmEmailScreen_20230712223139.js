import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
 

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
          <Text className="font-bold text-[#051c68] mt-10 mb-3 text-2xl">
            Confirm Your Email
          </Text>
        </View>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
      
        <CustomButton
          text="Confirm"
          onPress={onConfPressed}
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

export default ConfirmEmailScreen;
