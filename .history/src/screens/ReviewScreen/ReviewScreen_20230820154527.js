import React, {useState} from 'react';
import {View,TextInput, Button,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const sendPayment = async (applicantId, amount, senderId) => {
  console.log(applicantId, amount, senderId);
  try {
    const token = await AsyncStorage.getItem('jwt');

    const response = await fetch(
      'http://172.18.0.1:8000/sendfinalizedpayment',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          userId: senderId,
          amount: amount,
          receiverId: applicantId,
        }),
      },
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log('successful:', data);
      Alert.alert('Payment has been successfully sent!');
    }
  } catch (error) {
    // Handle fetch or other errors
    console.error('Error:', error);
    // Display an error message to the user or handle the error gracefully
  }
};


const ReviewForm = () => {
     const route = useRoute();
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
//    const [applicantId, setApplicantId] = useState('');
    const navigation = useNavigation();
  const handleSubmit = async () => {
    try {
         const {params} = route;
      if (params && params.applicantId) {
        console.log( params.applicantId);
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
          applicantId:params.applicantId,
          
        }),
      });
      const data = await response.json();
      console.log(data);
      console.log(params.applicantId);
      console.log('hello');
     

      if (response.ok) {

        console.log('successful:', data);
        Alert.alert('Review has been successfully Submitted!');
        sendPayment(params.applicantId, params.amount, params.senderId);
        navigation.navigate('Home');
      } else {
        // Sign-in failed
        console.log('posting failed:', data.message);
        // Display an error message to the user
      }
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
