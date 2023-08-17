import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {

  const route = useRoute(); // Get the route object


useEffect(() => {
  const fetchData = async () => {
    try {
      const { params } = route;
      if (params && params.userid) {
        console.log(params.userid); // Now you can access the userid parameter

        const token = await AsyncStorage.getItem('jwt');
        
        // Make the fetch request with the token in the headers
        const response = await fetch(`http://172.18.0.1:8000/user/${params.userid}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        
        const result = await response.json();
        console.log(result);
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

    </View>
  );
};

export default ApplicantScreen;
