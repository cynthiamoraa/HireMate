import { View, Text,Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
      // Retrieve the user data from AsyncStorage
      const getUserData = async () => {
        try {
          const userString = await AsyncStorage.getItem('user');
          if (userString) {
            const userData = JSON.parse(userString);
            setUsername(userData.username);
            setEmail(userData.email);
          }
        } catch (error) {
          console.error('Error retrieving user data:', error);
        }
      };

      getUserData();
    }, []);
    const navigation = useNavigation();
    const onLogOutPressed = () => {
       navigation.navigate('Signin');
    };


  return (
    <View className="p-10">
      <Icon name="user-circle" size={150} className="p-5 bg-[#3D7DEB]" />
      <Text className="text-2xl pt-5 font-bold pb-1">Username</Text>
      <Text>{username}</Text>
      <Text className="text-2xl pt-5 font-bold pb-1">Email</Text>
      <Text>{email}</Text>
      <ButtonButton> 
      <View className="p-10 mt-40">
        <CustomButton
          text="Log Out"
          onPress={onLogOutPressed}
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
