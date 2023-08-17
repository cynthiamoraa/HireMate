import { View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const TopUpScreen = () => {
    const [phone, set] = useState('');
  return (
    <View>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
    </View>
  );
};

export default TopUpScreen;
