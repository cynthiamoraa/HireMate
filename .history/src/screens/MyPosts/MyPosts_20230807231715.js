import { View, Text } from 'react-native';
import React,{useEffect,use} from 'react';

const MyPosts = () => {
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
  return (
    <View>
      <Text className="text-2xl m-5 text-center">MyPosts</Text>

    </View>
  );
};

export default MyPosts;
