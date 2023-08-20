import { View, Text,Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ApplicantScreen = () => {
  const route = useRoute(); // Get the route object
  const [userData, setUserData] = useState(null);
  const [applicantButtonStates, setApplicantButtonStates] = useState({});
  const navigation = useNavigation();
 

useEffect(() => {
  const fetchData = async () => {
    try {
      const {params} = route;
      if (params && params.postId) {
        console.log(params.postId); // Now you can access the userid parameter

        const token = await AsyncStorage.getItem('jwt');

        // Make the fetch request with the token in the headers
        const response = await fetch(
          'http://172.18.0.1:8000/allpost',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );

        const result = await response.json();
        console.log(result.posts);
         
        const matchingPost = result.posts.find(
              post => post._id === params.postId,
        );

      

        setUserData(matchingPost);
        console.log(matchingPost);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [route]);

const openMail = (email) => {
  Linking.openURL(`mailto:${email}`);
  console.log(`Opening email for: ${email}`);

};
const review = async (applicantId,amount,senderId) => {
  console.log('review for applicant:', applicantId);
  navigation.navigate('Review', {applicantId},{amount},{senderId}); // Pass the applicantId as a parameter
};


 const deductPayment = async (applicantId, applicantEmail) => {
   try {
     const token = await AsyncStorage.getItem('jwt');
     const response = await fetch('http://172.18.0.1:8000/deductpayment', {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
       },
       body: JSON.stringify({
         userId: userData.postedBy._id,
         amount: userData.amount,
         receiverId: applicantId,
       }),
     });
         if (response.status === 200) {
           console.log('Payment deducted successfully');
           openMail(applicantEmail);
             review(applicantId, userData.amount, userData.postedBy._id);
            Alert.alert('Payment has been successfully sent!');
         } else {
           console.log('Payment deduction failed');
         }

   } catch (error) {
     console.error('Error fetching data:', error);
   }
 };
 
const handlePayment = async (applicantId) => {
  console.log('hello buttonpressed');
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
          amount: userData.amount,
          userId: userData.postedBy._id,
          receiverId: applicantId,
        }),
      },
    );
    const data = await response.json();
    console.log(data);

    console.log('hello');

    if (response.ok) {
      console.log('successful payment:', data);
      // Alert.alert('Review has been successfully Submitted!');
      // navigation.navigate('Home');
    }
  } catch (error) {
    // Handle fetch or other errors
    console.error('Error:', error);
    // Display an error message to the user or handle the error gracefully
  }
};



  return (
    <View className="m-4 ">
      {userData && (
        <View>
          <Text className="text-lg font-semibold">This job was posted by</Text>
          <Text className="text-lg p-1 ml-2">Title: {userData.title}</Text>
          <Text className="text-lg p-1 ml-2">
            Username: {userData.postedBy.username}
          </Text>
          <Text className="text-lg p-1 ml-2">Amount: {userData.amount}ksh</Text>
          <Text className="text-lg p-1 ml-2">
            Email: {userData.postedBy.email}
          </Text>

          <Text className="text-lg font-semibold">Applicants for the job:</Text>
          {userData.apply.map((applicant, index) => (
            <View key={index} className="p-3 ">
              <View>
                <Text className="text-lg">Username: {applicant.username}</Text>
                <Text className="text-lg">Email: {applicant.email}</Text>
              </View>
              <View className="in">
                <CustomButton
                  text="Review"
                  onPress={() => {
                    review(applicant._id);
                  }}
                  bgColor="#3D7DEB"
                  textColor="#fff"
                />

                <CustomButton
                  text="Hire"
                  onPress={() => {
                    deductPayment(applicant._id, applicant.email);
                  }}
                  bgColor="#3D7DEB"
                  textColor="#fff"
                />

                <CustomButton
                  text="Close Job"
                  onPress={() => handlePayment(applicant._id)}
                  bgColor="#3D7DEB"
                  textColor="#fff"
                />
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
