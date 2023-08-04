import {View,SafeAreaView, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const WalletScreen = () => {

  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View className="ml-10 p-12">
          <Text className="text-white">Jake Musembi</Text>
          <Text className="text-white">Goodmorning</Text>
        </View>
        <View className=" p-12 items-center">
          <Text className="text-white text-lg">Total Balance</Text>
          <Text className="text-lg text-white p-2">$400</Text>
          <CustomButton
            text="choose card"
            bgColor="#3D7DEB"
            textColor={'#fff'}
          />
        </View>
        <View className="flex flex-row ml-12">
          <CustomButton text="Send" bgColor="#3D7DEB" textColor={'#fff'} />
          <CustomButton text="top up" bgColor="#3D7DEB" textColor={'#fff'} />
        </View>
      </View>
      V
    </SafeAreaView>
  );
};

export default WalletScreen;
