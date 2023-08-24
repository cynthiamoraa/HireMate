import {View,Alert} from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WithDrawScreen = () => {
        const [phone, setPhone] = useState('');
        const [WithDrawAmount, setWithDrawAmount] = useState('');
        const navigation = useNavigation();

        const handleWithDraw =  () => {
            navigation.navigate(
              'Wallet',
              {withdraw: WithDrawAmount},
              
            );
            

               Alert.alert(
                 `Withdraw of Ksh ${WithDrawAmount} is being processed`,
                 '',
                 [
                   {
                     text: 'OK',
                     onPress: () => ,
                   },
                 ],
               );
        };
        console.log(WithDrawAmount);

    const handleSendSMS = async () => {
      const PhoneNumber = '+254' + phone.substring(1);
      console.log('wew', PhoneNumber);
      try {
        const response = await fetch('http://172.18.0.1:8000/sendsms', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            To: PhoneNumber,
            message:
              generateRandomKey() +
              'withdrawal of ' +
              WithDrawAmount() +
              'ksh successful',
          }),
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error sending SMS:', error);
      }
    };

    function generateRandomKey() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let key = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
      }
      return key;
    }
        
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
        value={WithDrawAmount}
        setValue={setWithDrawAmount}
        bgColor="#cce6ff"
      />
      <CustomButton
        text="Withdraw"
        onPress={handleWithDraw}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default WithDrawScreen;
