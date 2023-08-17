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
                 const callbackData = data.callbackData; // You need to set this in your backend response

                 console.log('Callback Data:', callbackData);

                 // Example: Display the payment information to the user
                 console.log('Payment Phone:', callbackData.phone);
                 console.log('Payment Amount:', callbackData.amount);
                 console.log('Transaction ID:', callbackData.trnx_id);
                Alert.alert('Payment successful');
               
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
