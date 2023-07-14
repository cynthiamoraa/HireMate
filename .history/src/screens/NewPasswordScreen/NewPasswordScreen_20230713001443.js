import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newpassword, setNewPassword] = useState('');


  const onSendPressed = () => {
    console.log('Confirm button pressed');
  };


  const onSignInPressed = ()=>{
    console.log('Sign up button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="bg-white h-screen">
        <View className="items-center  ">
          <Text className="font-bold text-[#051c68] mt-10 mb-3 text-2xl">
            Reset Your Password
          </Text>
        </View>

        <CustomInput
          placeholder="code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter your new password"
          value={newpassword}
          setValue={setNewPassword}
        />

        <CustomButton
          text="Send"
          onPress={onSendPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          bgColor="#fff"
          textColor={'#051c68'}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
