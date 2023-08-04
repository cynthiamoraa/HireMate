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
        <View className="ml-10 p-12 items-center">
          <Text>Total Balance</Text>
          <Text className="text-lg">$400</Text>
         <
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
