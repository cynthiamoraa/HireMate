import { View, Text } from 'react-native';
import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';

const MyPosts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
         const fetchData = async () => {
           try {
             // Get the JWT token from AsyncStorage
             const token = await AsyncStorage.getItem('jwt');
             const userId = await AsyncStorage.getItem('userId');

             // Make the fetch request with the token in the headers
             const response = await fetch('http://172.18.0.1:8000/mypost', {
               headers: {
                 Authorization: 'Bearer ' + token,
                 'User-Id': userId,
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
      <Text className="text-2xl m-5 text-center">MyPosts</Text>

      {data.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <CustomButton
              text="Delete"
              bgColor="#3D7DEB"
              textColor={'#fff'}
            />
          </View>
        );
      })}
    </View>
  );
};

export default MyPosts;
