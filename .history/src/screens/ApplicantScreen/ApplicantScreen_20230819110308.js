import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


  return (
    <View>
      <Text>Applicants for this Post:</Text>
      {userData && (
        <View>
          <Text className="text-lg">This job was posted by</Text>
          <Text>Title: {userData.title}</Text>
          <Text>Username: {userData.postedBy.username}</Text>
          <Text>Email: {userData.postedBy.email}</Text>

          <Text>Applicants:</Text>
          {userData.apply.map((applicant, index) => (
            <View key={index}>
              <Text>Username: {applicant.username}</Text>
              <Text>Email: {applicant.email}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
