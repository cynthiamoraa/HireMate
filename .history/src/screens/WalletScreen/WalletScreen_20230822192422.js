import {View,SafeAreaView, Text,ScrollView, Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const WalletScreen = () => {
  const route = useRoute();
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(0);



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
          'https://hiremate-hnjv.onrender.com/getstoredpayments',
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

   const storedBalance = AsyncStorage.getItem('balance');
   const initialBalance = storedBalance ? parseFloat(storedBalance) : 0;
   setBalance(initialBalance);

  const calculateTotalAmount = () => {
    let total = 0;
    data
      .filter(item => item.phone === Phone)
      .forEach(item => {
        total += parseFloat(item.amount);
      });
    return total;
  };

  const WithDrawAmount = () => {
    const {params} = route;
    if (params && params.withdraw) {
      return parseFloat(params.withdraw); // Return the withdrawal amount
    }
    return 0; // Default withdrawal amount if not provided
  };

  const fetchBalance = async () => {
    try {
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
      const balance1 = parseFloat(result.balance);
      const balance2 = calculateTotalAmount();
      const withdrawAmount = WithDrawAmount();
      let finalBalance = balance1 + balance2;

      if ( withdrawAmount <= finalBalance) {
        finalBalance = finalBalance - withdrawAmount;
        setBalance(finalBalance);
        AsyncStorage.setItem('balance', finalBalance.toString());

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchBalance();
}, [Phone, data, route]);

 const saveBalance = async () => {
    try {
     const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('https://hiremate-hnjv.onrender.com/wallet',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({balance}),
      });
      const result = await response.json();
      if (result && result.success) {
        Alert.alert('Success', result.message);
      } else {
        Alert.alert('Error', result.message);

      }

    } catch (error) {
      console.error('Error saving data:', error);
    }
  }


 const onWithDrawPressed = async () => {
   navigation.navigate('WithDraw');
 };


  const onTopUpPressed = async () => {
    navigation.navigate('TopUp');

  };


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
          <Text className="text-lg  text-white p-2">{balance} ksh</Text>
          {/* <CustomButton
            text="refresh balance"
            onPress={onRefreshPressed}
            bgColor="#3D7DEB"
            textColor={'#fff'}
          /> */}
        </View>
        <View className="flex flex-row ml-12 pb-3">
          <CustomButton
            text="Withdraw"
            bgColor="#3D7DEB"
            onPress={onWithDrawPressed}
            textColor={'#fff'}
          />
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
