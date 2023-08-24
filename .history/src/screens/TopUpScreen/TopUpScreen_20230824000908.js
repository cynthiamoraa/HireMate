import { Alert, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const TopUpScreen = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const navigation = useNavigation();

    const handleTopUp = async () => {
        try {
            const response = await fetch('http://172.18.0.1:8000/stkpush', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phone,
                amount,
              }),
            });

            const data = await response.json();
            console.log(data);
            // console.log(userId);
            if (response.ok) {
                console.log('top up successfully');
                Alert.alert('Top Up is being processed');
                navigation.navigate('Wallet',{topup:amount},{phone:phone});
            }


        } catch (error) {
            console.error('Error:', error);
        }
    };


  return (
    <View className="border m-6 mt-20 rounded-2xl">
      <CustomInput
        placeholder="Phone Number"
        value={phone}
        setValue={setPhone}
        bgColor="#cce6ff"
      />
      <CustomInput
        placeholder="Amount"
        value={amount}
        setValue={setAmount}
        bgColor="#cce6ff"
      />
      <CustomButton
        text="Top Up"
        onPress={handleTopUp}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default TopUpScreen;