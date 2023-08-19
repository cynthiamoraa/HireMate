import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch the applicants data here (initially or whenever needed)
  //   apply();
  // }, []);

  const apply = async (id) => {
    try {
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


  return (
    <View>
      <Text>Applicants for this Post:</Text>
         
          
              <CustomButton
                text="Apply"
                onPress={() => apply()}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
      
    </View>
  );
};

export default ApplicantScreen;
