import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [data.] = useState([]);

  useEffect(() => {
    // Fetch the applicants data here (initially or whenever needed)
    fetchData();
  }, []);

  const apply = async id => {
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
    
      const newData = data.map(item => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });
      setData(newData);
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
