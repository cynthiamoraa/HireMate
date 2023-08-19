import {View, Text, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const MyReviewsScreen = () => {
  const navigation = useNavigation();
  const [myreviews, setMyReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');

        // Make the fetch request with the token in the headers
        const response = await fetch('http://172.18.0.1:8000/myreviews', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        const result = await response.json();
        console.log(result);
        setMyReviews(result.myreviews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4">
      <Text className="text-2xl m-5 text-center">MyReviewsScreen</Text>

      {myreviews.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">rating</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
           
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MyReviewsScreen;
