import {View,SafeAreaView, Text,Button} from 'react-native';
import React from 'react';

const WalletScreen = () => {

  return (
    <SafeAreaView>
      <View className="bg-[#3D7DEB]">
        <View className="ml-10 p-12">
          <Text>Jake Musembi</Text>
          <Text>Goodmorning</Text>
        </View>
        <View className="ml-10 p-12">
          <Text>Total Balance</Text>
          <Text>$400</Text>
          <Button
            className="bg-white"
            title="Go to Details"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
