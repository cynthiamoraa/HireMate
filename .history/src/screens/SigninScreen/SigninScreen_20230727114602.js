import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Image, ScrollView} from 'react-native';
import LOGO from '../../../assets/images/Logo1.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      // Make the POST request to the server's sign-in API endpoint
      const response = await fetch('http://3.3.2.103:8000/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();

      if (response.ok) {
        AsyncStorage.setItem('jwt', data.token);
        AsyncStorage.setItem('user', JSON.stringify(data.user));
        // Sign-in success
        // Store authentication tokens or user data in state/local storage
        console.log('Sign-in successful:', data);
        navigation.navigate('Home');
      } else {
        // Sign-in failed
        console.log('Sign-in failed:', data.message);
        // Display an error message to the user
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error:', error);
      // Display an error message to the user or handle the error gracefully
    }
  };

  // const onSignInPressed = ()=>{
  //   console.log('Sign in button pressed');
  //   navigation.navigate('Home');
  // };

  const onForgotPasswordPressed = ()=>{
    console.log('Forgot password button pressed');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = ()=>{
    console.log('Sign up button pressed');
    navigation.navigate('SignUp');
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
          placeholder="U"
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
          onPress={handleSignIn}
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
