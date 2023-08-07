import { View, Text } from 'react-native';
import React,{useEffect} from 'react';

const MyPosts = () => {
    
    useEffect(() => {
  // Retrieve the user data from AsyncStorage
       const getUserData = async () => {
          try {
          const userString = await AsyncStorage.getItem('user');
          if (userString) {
                const userData = JSON.parse(userString);
                 setUsername(userData.username);
            }
         } catch (error) {
            console.error('Error retrieving user data:', error);
            }
        };

         getUserData();
     }, []);
  return (
    <View>
      <Text className="text-2xl m-5 text-center">MyPosts</Text>

    </View>
  );
};

export default MyPosts;
