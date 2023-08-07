import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindWorkScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
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
        data.map((item) => {
          return (
            <View showsVerticalScrollIndicator={true} className="border mt-10 ">
              <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
              <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
              <Text className=" mt-3 pl-4 text-lg">
                {item.postedBy.username}
              </Text>
              <CustomInput
                placeholder="get in touch"
                placeholderTextColor="#000"
                type="text"
                postedBy
              />
            </View>
          );
        })
      }
    </View>
  );
};

export default FindWorkScreen;
