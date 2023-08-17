import { View,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const TopUpScreen = () => {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

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



            if (response.ok) {
                

                   const resultCode = data.stkCallback.ResultCode; // Update the key to match your response
                   const resultDesc = data.stkCallback.ResultDesc; // Update the key to match your response

                   if (resultCode === 0) {
                     console.log(resultDesc);
                     Alert.alert('Payment successful');
                   } else {
                     console.log('Payment failed');
                     Alert.alert('Payment failed');
                   }
               
            } else {
                console.log('Top up failed:', data.message);
               
            }


        } catch (error) {
            console.error('Error:', error);
        }
    };


  return (
    <View>
      <CustomInput
        placeholder="Phone Number"
        value={phone}
        setValue={setPhone}
      />
      <CustomInput placeholder="Amount" value={amount} setValue={setAmount} />
      <CustomButton text="Top Up" onPress={handleTopUp} />
    </View>
  );
};

export default TopUpScreen;
