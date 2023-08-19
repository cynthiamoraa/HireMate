import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReviewScreen = () => {
  const makeComment = async() => {
    try{
        const token = await AsyncStorage.getItem('jwt');
        const response = await fetch( 'http://172.18.0.1:8000/review', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
                postId,
                text,
                rating,
            }),

            });
        const result = await response.json();
        console.log(result);
        const newData = data.map(item => {
            if (item._id === result._id) {
                return result;
            } else {
                return item;
            }
        });
        setData(newData);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
         
    }
  };



  return (
    <View>
      <Text>ReviewScreen</Text>
    </View>
  );
};

export default ReviewScreen;