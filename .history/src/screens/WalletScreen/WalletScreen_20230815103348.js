import {View,SafeAreaView, Text} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';


const WalletScreen = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the user data from AsyncStorage
    const getUserData = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        if (userString) {
          const userData = JSON.parse(userString);
          setUsername(userData.username);
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    getUserData();
  }, []);

   const onTopUpPressed = () => {
     navigation.navigate('TopUp');
   };

  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View>
          <Text className="text-white text-xl p-5 text-center font-bold">
            Hello ,{username}
          </Text>
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
          <CustomButton
            onPress={onTopUpPressed}
            text="top up"
            bgColor="#3D7DEB"
            textColor={'#fff'}
          />
        </View>
      </View>
      <View>
        <Text className="text-black text-xl p-5 text-center font-bold">
          Recent Transactions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
