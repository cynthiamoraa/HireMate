import {View,SafeAreaView, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const WalletScreen = () => {

  return (
    <SafeAreaView>
      <View className="bg-[#3D7DEB]">
        <View className="ml-10 p-12">
          <Text>Jake Musembi</Text>
          <Text>Goodmorning</Text>
        </View>
        <View className=" p-12 items-center">
          <Text>Total Balance</Text>
          <Text className="text-lg">$400</Text>
          <CustomButton
            text="choose card"
            bgColor="#ADD8E6"
            textColor={'#fff'}
          />
        </View>
        <View className="flex flex-row ml-12">
          <CustomButton text="Send" 
          bgColor="#E7EAF4" textColor={'#4765A9'} />
          <CustomButton text="top up" bgColor="#E7EAF4" textColor={'#4765A9'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
