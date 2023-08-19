import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Get the JWT token from AsyncStorage
          const token = await AsyncStorage.getItem('jwt');

          // Make the fetch request with the token in the headers
          const response = await fetch('http://172.18.0.1:8000/allpost', {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          });

          const result = await response.json();
          console.log(result);
          const appliedStatesObj = {};
          result.posts.forEach(post => {
            appliedStatesObj[post._id] = false; // Initialize all states as false
          });

         

          setData(result.posts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);




  return (
    <View>
      <Text>Applicants for this Post:</Text>
      
        <View>
          <Text>Username: {userData.username}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
     
    </View>
  );
};

export default ApplicantScreen;
