import {View} from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const WithDrawScreen = () => {
        const [phone, setPhone] = useState('');
        const [amount, setAmount] = useState('');
        const navigation = useNavigation();

        const handleWithDraw = async () => {
            navigation.navigate('Wallet');
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
        value={amount}
        setValue={setAmount}
        bgColor="#cce6ff"
      />
      <CustomButton
        text="Top Up"
        onPress={handleWithDraw}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default WithDrawScreen;
