import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Linking } from 'react-native';

const ApplicantScreen = () => {

  const route = useRoute(); // Get the route object
      const [userData, setUserData] = useState(null);

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

const openmail = () => {
  {user}
  const to = userData.apply.email;
  Linking.openURL(`mailto:${to}`);
  console.log(to);
  console.log('mail opened');
}

  return (
    <View className="m-4 ">
      {userData && (
        <View>
          <Text className="text-lg font-semibold">This job was posted by</Text>
          <Text className="text-lg p-1 ml-2">Title: {userData.title}</Text>
          <Text className="text-lg p-1 ml-2">
            Username: {userData.postedBy.username}
          </Text>
          <Text className="text-lg p-1 ml-2">
            Email: {userData.postedBy.email}
          </Text>

          <Text className="text-lg font-semibold">Applicants for the job:</Text>
          {userData.apply.map((applicant, index) => (
            <View key={index} className="p-3 flex-row">
              <View>
                <Text className="text-lg">Username: {applicant.username}</Text>
                <Text className="text-lg">Email: {applicant.email}</Text>
              </View>
              <CustomButton
                text="Hire"
                onPress={openmail}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
