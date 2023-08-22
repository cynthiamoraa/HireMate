import {View,SafeAreaView, Text,ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WalletScreen = () => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(0);

  console.log(balance)

  useEffect(() => {
    // Retrieve the user data from AsyncStorage
    const getUserData = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        // console.log(userString);
        if (userString) {
          const userData = JSON.parse(userString);
          setUsername(userData.username);
          setPhone(userData.phone);
          setId(userData._id);
          console.log(userData);
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    getUserData();
  }, []);

  const Phone = '254' + phone.substring(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');
        const response = await fetch(
          'http://172.18.0.1:8000/getstoredpayments',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          },
        );
        const result = await response.json();
        // console.log(result);
        setData(result.payments);
        // console.log(result.payments);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calculateTotalAmount = () => {
          let total = 0;
          data
            .filter(item => item.phone === Phone)
            .forEach(item => {
              total += parseFloat(item.amount);
            });
          return total;
        };

    const fetchBalance = async () => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');
        const response = await fetch(
          'https://hiremate-hnjv.onrender.com/wallet',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          },
        );
        const result = await response.json();
        console.log(result);
        const balance1 = result.balance;
        const balance2 = calculateTotalAmount();
        setBalance(result.balance);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBalance();

  }, []);



 


  const onTopUpPressed = async () => {
    navigation.navigate('TopUp');

  };
    // const onRefreshPressed = async () => {

    //   const totalAmount = calculateTotalAmount();
    //   setBalance(totalAmount);
    //   console.log(totalAmount);
    // };

  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View>
          <Text className="text-white text-xl p-5 text-center font-bold">
            Hello ,{username}
          </Text>
          {/* <Text className="text-white text-xl p-5 text-center font-bold">
            Hello ,{Phone}
          </Text> */}
          <Text className="text-white p-1 text-center">Wallet id : {id}</Text>
        </View>
        <View className=" p-12 items-center">
          <Text className="text-white text-lg">Total Balance</Text>
          <Text className="text-lg  text-white p-2">
            {balance} ksh
          </Text>
          {/* <CustomButton
            text="refresh balance"
            onPress={onRefreshPressed}
            bgColor="#3D7DEB"
            textColor={'#fff'}
          /> */}
        </View>
        <View className="flex flex-row ml-12 pb-3">
          <CustomButton text="Withdraw" bgColor="#3D7DEB" textColor={'#fff'} />
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
        <ScrollView showsVerticalScrollIndicator={false} className="ml-3">
          {data.map(item => {
            if (item.phone === Phone) {
              return (
                <View key={item._id} className=" flex-row mt-5 mx-3 ">
                  <Text className=" mr-12 font-bold  text-xl">
                    {item.trnx_id}
                  </Text>
                  <Text className=" ml-12 text-lg">{item.amount}ksh</Text>
                </View>
              );
            }
            return null;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
