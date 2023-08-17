import {View, Text, ScrollView} from 'react-native';
import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const MyPosts = () => {
  const navigation = useNavigation();
       const [mypost, setMypost] = useState([]);
       useEffect(() => {
         const fetchData = async () => {
           try {
             // Get the JWT token from AsyncStorage
             const token = await AsyncStorage.getItem('jwt');

             // Make the fetch request with the token in the headers
             const response = await fetch('http://172.18.0.1:8000/mypost', {
               headers: {
                 Authorization: 'Bearer ' + token,
               },
             });

            
             const result = await response.json();
             console.log(result);
             setMypost(result.mypost);
           } catch (error) {
             console.error('Error fetching data:', error);
           }
         };
          fetchData();
        }, []);

        const handleDelete = async (postid) => {

          console.log('presssedd');

          try {

            const token = await AsyncStorage.getItem('jwt');
            const response = await fetch(
              `http://172.18.0.1:8000/deletepost/${postid}`,
              {
                method: 'delete',
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              },
            );
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error('Error:', error);
          }
          navigation.navigate('profile');
        };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4">
      <Text className="text-2xl m-5 text-center">MyPosts</Text>

      {mypost.map(item => {
        return (
          <View className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <CustomButton
              text="Delete"
              onPress={() => handleDelete(item._id)}
              bgColor="#3D7DEB"
              textColor={'#fff'}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MyPosts;
