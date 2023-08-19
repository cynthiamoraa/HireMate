// Inside your review form component
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const ReviewForm = ({postId}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async () => {
    try {
        const token = await AsyncStorage.getItem('jwt');

        // Make the fetch request with the token in the headers
        const response = await fetch('http://172.18.0.1:8000/allpost', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + yourAuthToken, // Set your authentication token here
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
    <View>
      <TextInput
        placeholder="Enter your review"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        placeholder="Enter your rating"
        value={rating}
        onChangeText={setRating}
      />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewForm;
