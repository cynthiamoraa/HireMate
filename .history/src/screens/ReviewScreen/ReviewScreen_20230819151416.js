import { View, Text } from 'react-native';
import React from 'react';

const ReviewScreen = () => {
  const makeComment = async() => {
    try{
        const response = await fetch(
          'http://172.18.0.1:8000/allpost',
    }
  };



  return (
    <View>
      <Text>ReviewScreen</Text>
    </View>
  );
};

export default ReviewScreen;