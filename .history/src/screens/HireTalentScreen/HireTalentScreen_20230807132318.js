import { View } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

 const createPost = async () => {
    try {
      // Make the POST request to the server's sign-in API endpoint
       const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('http://172.18.0.1:8000/createpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          title,
          body,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();

      if (response.ok) {
        // AsyncStorage.setItem('jwt', data.token);
        // AsyncStorage.setItem('user', JSON.stringify(data.user));
        // Sign-in success
        // Store authentication tokens or user data in state/local storage
        console.log('successful:', data);
        navigation.navigate('Home');
      } else {
        // Sign-in failed
        console.log('posting failed:', data.message);
        
        // Display an error message to the user
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error:', error);
      // Display an error message to the user or handle the error gracefully
    }
  };


    const navigation = useNavigation();
  return (
    <View className="border m-3">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#000"
        type="text"
        value={title}
        setValue={setTitle}
        onChange={e => setTitle(e.target.value)}
      />
      <CustomInput
        placeholder="body"
        placeholderTextColor="#000"
        type="text"
        value={body}
        setValue={setBody}
        onChange={e => setBody(e.target.value)}
      />
      <View className="flex-row  items-center ">
        <View className="mr-[-50]">
          <CustomButton text="Upload" bgColor="#3D7DEB" textColor={'#fff'} />
        </View>
        <View className="">
          <CustomInput type="text" placeholder="" />
        </View>
      </View>
      <CustomButton text="Submit" bgColor="#3D7DEB" textColor={'#fff'} onPress={createPost} />
    </View>
  );
};

export default HireTalentScreen;
