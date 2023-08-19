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

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('http://172.18.0.1:8000/apply', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          postId:id, // Replace with the actual post ID
        }),
      });
      const result = await response.json();
      console.log(result);
      setApplicants(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({item}) => (
    <View>
      <Text>Username: {item.username}</Text>
      {item.email && <Text>Email: {item.email}</Text>}
    </View>
  );

  return (
    <View>
      <Text>Applicants for this Post:</Text>
      <FlatList
        data={applicants}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default ApplicantScreen;
