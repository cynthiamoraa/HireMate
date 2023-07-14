import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
   navigation.navigate('Home');
  };
  const onResendPressed = () => {
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
          onPress={onConfirmPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          bgColor=""
          textColor={'#051c68'}
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

export default ConfirmEmailScreen;
