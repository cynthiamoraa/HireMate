import { View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const TopUpScreen = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
  return (
    <View>
      <CustomInput
        placeholder="Phone Number"
        value={}
        setValue={set}
      />
    </View>
  );
};

export default TopUpScreen;
