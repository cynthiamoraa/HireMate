import { View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const TopUpScreen = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

    const handleTopUp = async () => {
        
  return (
    <View>
      <CustomInput
        placeholder="Phone Number"
        value={phone}
        setValue={setPhone}
      />
        <CustomInput
        placeholder="Amount"
        value={amount}
        setValue={setAmount} />
    </View>
  );
};

export default TopUpScreen;
