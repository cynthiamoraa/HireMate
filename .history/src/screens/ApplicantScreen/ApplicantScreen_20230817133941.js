import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';


const ApplicantScreen = () => {

  const route = useRoute(); // Get the route object

  useEffect(() => {
    const {params} = route;
    if (params && params.userid) {
      console.log(params.userid); // Now you can access the userid parameter
    }
  }, [route]);

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

    </View>
  );
};

export default ApplicantScreen;
