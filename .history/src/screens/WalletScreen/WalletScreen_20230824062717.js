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
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [withdrawn, setWithdrawn] = useState(false);
  const [toppedUp, setToppedUp] = useState(false);

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
  console.log(Phone);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Get the JWT token from AsyncStorage
  //       const token = await AsyncStorage.getItem('jwt');
  //       const response = await fetch(
  //         'https://hiremate-hnjv.onrender.com/getstoredpayments',
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: 'Bearer ' + token,
  //           },
  //         },
  //       );
  //       const result = await response.json();
  //       // console.log(result);
  //       setData(result.payments);
  //       // console.log(result.payments);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const TopUpAmount = () => {
    const {params} = route;
    if (params && params.topup) {
      console.log('top up amount', params.topup);
      return parseFloat(params.topup); // Return the withdrawal amount
    }
    return 0;
  };
  const WithDrawAmount = () => {
    const {params} = route;
    if (params && params.withdraw) {
      console.log('withdrawal amount', params.withdraw);
      return parseFloat(params.withdraw);

      // Return the withdrawal amount
    }
    return 0; // Default withdrawal amount if not provided
  };

  const saveBalance = async newBalance => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      await fetch('https://hiremate-hnjv.onrender.com/wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({balance: newBalance}),
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
saveBalance();
  const fetchBalance = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await fetch(
        'https://hiremate-hnjv.onrender.com/getwallet',
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const result = await response.json();

      setBalance(result.balance);
      console.log('fetchb', result.balance);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleUpdateBalance = async () => {
    const withdrawalAmount = WithDrawAmount();
    const topUpAmount = TopUpAmount();
    const newBalance = parseFloat(balance) - withdrawalAmount + topUpAmount;

    // Update the balance on the server
    await saveBalance(newBalance);

    // Update the local balance state
    setBalance(newBalance);
    setWithdrawn(false); // Reset withdrawal state
    setToppedUp(false); // Reset top-up state
    createTransaction(newTransaction);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const createTransaction = async transactionData => {
    try {
      const response = await fetch(
        'https://hiremate-hnjv.onrender.com/transactions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transactionData),
        },
      );

      const transdata = await response.json();
      console.log(transdata);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  const newTransaction = {
    phone: Phone,
    transactionAmount: TopUpAmount(),
    withdrawalAmount: WithDrawAmount(),
  };

  // Call the functions

  // GET all transactions
  const getAllTransactions = async () => {
    try {
      const response = await fetch(
        'https://hiremate-hnjv.onrender.com/gettransactions',
      );
      const getdata = await response.json();

      // Filter transactions with transactionAmount or withdrawalAmount > 0
      const filteredTransactions = getdata.transactions.filter(
        transaction =>
          transaction.transactionAmount > 0 || transaction.withdrawalAmount > 0,
      );
        setTransactions(filteredTransactions);
      console.log('this is the data', filteredTransactions);
   
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const onRefreshPressed = () => {
    getAllTransactions();
  };

  const onWithDrawPressed = async () => {
    if (balance > 0) {
      navigation.navigate('WithDraw');
    } else {
      Alert.alert('You have insufficient funds');
    }
  };

  const onTopUpPressed = async () => {
    navigation.navigate('TopUp');
  };

const handleSendSMS = async () => {
  const Phone = '254' + phone.substring(1);
  console.log('',Phone);
  try {
    const response = await fetch('http://172.18.0.1:8000/sendsms', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({To: Phone, message: 'works'}),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};



  function generateRandomKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
    return key;
  }
  return (
    <SafeAreaView>
      <View className="bg-[#0a0a0a] rounded-b-lg">
        <View>
          <Text className="text-white text-xl p-5 text-center font-bold">
            Hello ,{username}
          </Text>

          <Text className="text-white p-1 text-center">Wallet id : {id}</Text>
        </View>
        <View className=" p-12 items-center">
          <Text className="text-white text-lg">Total Balance</Text>
          <Text className="text-lg  text-white p-2">{balance} ksh</Text>
          <CustomButton
            text="update balance"
            onPress={handleUpdateBalance}
            bgColor="#3D7DEB"
            textColor="#fff"
          />
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
        <CustomButton
          text="send sms"
          bgColor="#3D7DEB"
          onPress={handleSendSMS}
          textColor={'#fff'}
        />
        <CustomButton
          text="Refresh"
          onPress={onRefreshPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {transactions.map(item => (
            <View key={item._id} className="flex-row mt-5 mx-3 p-3">
              <Text className="mr-12 font-bold text-xl">
                {item.transactionId}
              </Text>
              <Text className="ml-6 text-lg">{item.transactionAmount}ksh</Text>
              <Text className="ml-6 text-lg">{item.withdrawalAmount}ksh</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
