import React,{useState} from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View className="items-center ">
        <Image
          source={LOGO}
          className="object-contain w-50% max-w-100  h-30vh"
        />
      </View>

      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder=""/>
    </View>
  );
};

export default SigninScreen;
