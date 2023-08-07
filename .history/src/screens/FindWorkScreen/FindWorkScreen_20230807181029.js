import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindWorkScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.18.0.1:8000/allpost', {
          headers: {
            Authorization: 'Bearer ' + AsyncStorage.getItem('jwt'),
          },
        });

        // Check if the response is not successful (status code other than 200-299)
        if (!response.ok) {
          setData(response.data);
          console.error('Request failed with status:', response.status);
          return; // Exit the function or handle the error as needed
        }

        const data = await response.json();
        // Process the data as needed
        console.log('Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., show an error message to the user
      }
    };


    const handleSearch = () => {
      // Implement your search logic here based on the `searchText` state
      console.log('Search for:', searchText);
    };
  return (
    <View className="m-4">
      <Text className="text-center font-bold mt-5 text-lg">FindWork</Text>
      <View className=" flex ">
        <TextInput
          className="border mt-5  px-10 "
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} className="ml-80 mt-[-32]">
          <Icon name="search" size={24} color="#3D7DEB" />
        </TouchableOpacity>
      </View>

      {
        data.map(item => {
          return (
            <View key= className="border mt-10">
              <Text className="pl-2 font-bold mt-5 text-xl">FindWork</Text>
              <Text className=" mt-3 pl-4 text-lg">FindWork</Text>
              <CustomInput
                placeholder="get in touch"
                placeholderTextColor="#000"
                type="text"
              />
            </View>
          );
        })
      }
    </View>
  );
};

export default FindWorkScreen;
