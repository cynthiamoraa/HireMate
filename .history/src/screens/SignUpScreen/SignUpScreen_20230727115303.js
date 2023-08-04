import React,{useState} from 'react';

import {View,  ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const PostData = async () => {
  try {
    // Make the POST request to the server
    const response = await fetch('http://3.3.2.103:8000/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    // Parse the response as JSON
    const data = await response.json();
    console.log(data);

    // Handle success and navigation
    console.log(username, password);
    navigation.navigate('Signin');
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    // You can display an error message to the user here if needed.
  }
};

  const navigation = useNavigation();

  // const onRegisterPressed = () => {
  //   navigation.navigate('ConfirmEmail');
  // };

  const onSignInPressed = ()=>{
    navigation.navigate('Signin');
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
            Create an Account
          </Text>
        </View>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email"
        value={email} s
        etValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        {/* <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        /> */}
        <CustomButton
          onPress={PostData}
          text="Register"
          // onPress={onRegisterPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <Text className="text-gray-500 my-1 mx-2">
          By registering confirm that you accept our{' '}
          <Text className="text-[#FDB075]" onPress={onTermsOfUsePressed}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text className="text-[#FDB075]" onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
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
