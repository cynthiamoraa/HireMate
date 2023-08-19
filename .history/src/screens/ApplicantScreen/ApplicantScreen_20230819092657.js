import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Fetch the applicants data here (initially or whenever needed)
    fetchData();
  }, []);

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
          postId: id, // Make sure you define 'id' before using it here
        }),
      });
      const result = await response.json();
      console.log(result);
      setApplicants(result); // Update the applicants state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Text>Applicants for this Post:</Text>
      <FlatList
        data={applicants}
        keyExtractor={item => item._id} // Use '_id' as the key
        renderItem={({item}) => (
          <View>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email || 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApplicantScreen;
