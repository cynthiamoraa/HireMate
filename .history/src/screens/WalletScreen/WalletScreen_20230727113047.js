import {View,SafeAreaView, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const WalletScreen = () => {

  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View>
          
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
        <View className="flex flex-row ml-12 pb-3">
          <CustomButton text="Send" bgColor="#3D7DEB" textColor={'#fff'} />
          <CustomButton text="top up" bgColor="#3D7DEB" textColor={'#fff'} />
        </View>
      </View>
      <View>
        <Text className="text-black text-xl p-5 text-center font-bold">Recent Transactions</Text>

      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
