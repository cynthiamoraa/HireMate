import { View, Text,Alert,ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ApplicantScreen = () => {
  const route = useRoute(); // Get the route object
  const [userData, setUserData] = useState(null);
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
          'https://hiremate-hnjv.onrender.com/allpost',
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
  navigation.navigate('Review', {applicantId},{amount},{senderId});
};


 const deductPayment = async (applicantId, applicantEmail) => {
   try {
     const token = await AsyncStorage.getItem('jwt');
     const response = await fetch(
       'https://hiremate-hnjv.onrender.com/deductpayment',
       {
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
       },
     );

        console.log('Response status:', response.status);

        const responseData = await response.json();
        console.log('Response data:', responseData);

         if (response.ok) {
           console.log('Payment deducted successfully');
           openMail(applicantEmail);

         } else {
           Alert.alert(responseData.message);
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
      'https://hiremate-hnjv.onrender.com/sendfinalizedpayment',
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
      Alert.alert('This job has been successfully closed you can delete it!');
      navigation.navigate('MyPosts');
    }
     else {
      Alert.alert(data.message,'the payment was not successfully sent');

    }
  } catch (error) {

    console.error('Error:', error);
  }
};



  return (
    <View className="m-4 ">
      {userData && (
         <View>
              <Text className="text-lg font-semibold text-black">
            This job was posted by
          </Text>
          <View className="border rounded-2xl mb-8 mt-2">
            <Text className="text-lg p-1 ml-2 text-black">
              Title: {userData.title}
            </Text>
            <Text className="text-lg p-1 ml-2 text-black">
              Username: {userData.postedBy.username}
            </Text>
            <Text className="text-lg p-1 ml-2 text-black">
              Amount : {userData.amount}ksh
            </Text>
            <Text className="text-lg p-1 ml-2 text-black">
              Email: {userData.postedBy.email}
            </Text>
          </View>
         </View>

          <Text className="text-lg font-semibold text-black">
            Applicants for the job: {userData.apply.length}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <></>
            {userData.apply.map((applicant, index) => (
              <View key={index} className="p-3 border rounded-2xl my-2">
                <View>
                  <Text className="text-lg text-black">
                    Username: {applicant.username}
                  </Text>
                  <Text className="text-lg text-black">
                    Email: {applicant.email}
                  </Text>
                </View>
                <View className="inline-block">
                  <CustomButton
                    text="Hire"
                    onPress={() => {
                      deductPayment(applicant._id, applicant.email);
                    }}
                    bgColor="#3D7DEB"
                    textColor="#fff"
                  />
                  <CustomButton
                    text="Review"
                    onPress={() => {
                      review(applicant._id);
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
          </ScrollView>
        
      )}
    </View>
  );
};

export default ApplicantScreen;
