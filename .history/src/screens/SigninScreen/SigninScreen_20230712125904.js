import React,{useState} from 'react';
import {View, Image} from 'react-native';
import LOGO from '../../../assets/images/Logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View className="items-center p-2 ">
        <Image
          source={LOGO}
          className="object-contain h-30"
        />
      </View>

      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton />
    </View>
  );
};

export default SigninScreen;
