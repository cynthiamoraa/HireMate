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
              {Wphone: withdrawPhone},
            );
            Alert.alert(
              `'Withdraw of Ksh ${WithDrawAmount} is being processed`,
            );
        };
        console.log(WithDrawAmount,phone);
        const withdrawPhone = '254' + phone.substring(1);
        // console.log(withdrawPhone);
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
