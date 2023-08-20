import {View, Text, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View>
      
    <ScrollView showsVerticalScrollIndicator={false} >
     
      {myreviews.map(item => {
        return (
          <View
            key={item._id}
            className="border p-3  m-5 bg-slate-200 rounded-2xl">
            <Text className=" text-center  font-bold  text-lg">
              rating: {item.rating}/5
            </Text>
            <Text className=" text-center  font-bold  text-lg">
              comment: {item.text}
            </Text>
          </View>
        );
      })}
    </ScrollView>
    </View>
  );
};

export default MyReviewsScreen;
