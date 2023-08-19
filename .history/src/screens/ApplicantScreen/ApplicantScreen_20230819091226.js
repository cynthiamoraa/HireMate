import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const route = useRoute();
  const postId = route.params.postId; // Get postId from navigation params

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');

        const response = await fetch('http://172.18.0.1:8000/appl', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        const result = await response.json();
        console.log(result);

        setData(result.apply);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [postId]);

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
