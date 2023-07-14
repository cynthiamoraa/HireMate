import React,{useState} from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/Logo1.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = ()=>{
    console.log('Sign in button pressed');
  };
  return (
    <View>
      <View className="items-center  ">
        <Image source={LOGO} className="object-contain w-40 h-40" />
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
      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton text="Forgot " onPress={onSignInPressed} />
    </View>
  );
};

export default SigninScreen;
