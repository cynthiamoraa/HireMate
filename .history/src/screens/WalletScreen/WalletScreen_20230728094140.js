import {View,SafeAreaView, Text} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import IntaSend from 'intasend-node';

const WalletScreen = () => {
  const [username, setUsername] = useState('');

  const fetchWallets = async () => {
    try {
      // Replace "<PUBLISHABLE_KEY>", "<SECRET_KEY>", and true with your actual credentials
      let intasend = new IntaSend(
        'ISPubKey_test_f0b842c9-8872-4806-8106-6b577abf5b20',
        'ISSecretKey_test_e26e976e-ae0f-4539-a353-af3f5bebcdfd',
        true, // Test ? Set true for test environment
      );
      let wallets = intasend.wallets();
      wallets
        .list()
        .then(resp => {
          console.log(`Response: ${JSON.stringify(resp)}`);
        })
        .catch(err => {
          console.error(`Error: ${err}`);
        });
    } catch (error) {
      throw new Error(`Error fetching wallets: ${error.message}`);
    }
  };

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
 

  //  const fetchWallets = () => {
  //    let intasend = new IntaSend(
  //      'ISPubKey_test_f0b842c9-8872-4806-8106-6b577abf5b20',
  //      'ISSecretKey_test_e26e976e-ae0f-4539-a353-af3f5bebcdfd',
  //      true, // Test ? Set true for test environment
  //    );
  //    let wallets = intasend.wallets();
  //    wallets
  //      .list()
  //      .then(resp => {
  //        console.log(`Response: ${JSON.stringify(resp)}`);
  //      })
  //      .catch(err => {
  //        console.error(`Error: ${err}`);
  //      });
  //  }

 ;
  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View>
          <Text className="text-white text-xl p-5 text-center font-bold">Hello ,{username}</Text>
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
