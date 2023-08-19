import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AirbnbRating} from 'react-native-ratings';

const ReviewForm = ({postId}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); // Initialize with a default value

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');

      const response = await fetch('http://172.18.0.1:8000/review', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          text,
          rating,
          postId,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Log the result
        // Handle any UI updates or navigation you need
      } else {
        console.log('Review submission failed');
        // Handle the error case
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle the error case
    }
  };

  return (
    <View className="m-2 items-center mt-50">
      <AirbnbRating
        count={5}
        defaultRating={rating} // Use the rating state here
        onFinishRating={setRating} // Update the rating state
      />
      <TextInput
        placeholder="Enter your review"
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewForm;
