import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData to get the data
    fetchData();
  }, []); // Empty dependency array to execute the effect once on mount

  return (
    <View>
      <Text>Applicants for this Post:</Text>
      {data.map(item => (
        <CustomButton
          key={item._id} // Don't forget to provide a unique key for each element in a list
          text="Apply"
          onPress={() => fetchData(item._id)} // Make sure 'item._id' is defined in the data structure
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
      ))}
    </View>
  );
};

export default ApplicantScreen;
