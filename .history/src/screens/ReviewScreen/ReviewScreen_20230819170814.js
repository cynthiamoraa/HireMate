import React, {useState} from 'react';
import {View, Text,TextInput, Button,A} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AirbnbRating} from 'react-native-ratings';
import CustomInput from '../../components/CustomInput/CustomInput';

const ReviewForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); // Initialize with a default value

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');

      const response = await fetch('http://172.18.0.1:8000/review', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          text,
          rating,
        }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {

        console.log('successful:', data);
        
      } else {
        // Sign-in failed
        console.log('posting failed:', data.message);
        // Display an error message to the user
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error:', error);
      // Display an error message to the user or handle the error gracefully
    }
  };

  return (
    <View className="m-2 items-center mt-40">
      <AirbnbRating
        count={5}
        defaultRating={rating} // Use the rating state here
        onFinishRating={setRating} // Update the rating state
      />
      <TextInput
        placeholder="Write a review"
        placeholderTextColor="#000"
        value={text}
        onChangeText={setText} 
      />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewForm;
