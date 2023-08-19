import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  // Get postId from navigation params

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');

          const response = await fetch('http://172.18.0.1:8000/apply', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
              postId: id,
            }),
          });
          const result = await response.json();
          console.log(result);
         setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Applicants for this Post:</Text>
      {data.map(applicant => (
        <View key={applicant._id}>
          <Text>Username: {applicant.username}</Text>
          <Text>Email: {applicant.email || 'N/A'}</Text>
        </View>
      ))}
    </View>
  );
};

export default ApplicantScreen;
