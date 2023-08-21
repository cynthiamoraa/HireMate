import { View ,Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [amount, setAmount] = useState('');

 const createPost = async () => {
    try {
      // Make the POST request to the server's sign-in API endpoint
       const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('https://hiremate-hnjv.onrender.com/createpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          title,
          body,
          amount,
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
        const message = 'Post created successfully';
           Alert.alert('Success!!', message);
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
    <View className="border m-3 rounded-2xl mt-10">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#14408d"
        type="text"
        value={title}
        setValue={setTitle}
        onChange={e => setTitle(e.target.value)}
        bgColor="#cce6ff"
      />
      <CustomInput
        placeholder="body"
        placeholderTextColor="#000"
        type="text"
        value={body}
        setValue={setBody}
        onChange={e => setBody(e.target.value)}
        bgColor="#cce6ff"
      />
      <CustomInput
        placeholder="amount"
        placeholderTextColor="#000"
        type="text"
        value={amount}
        setValue={setAmount}
        onChange={e => setAmount(e.target.value)}
        bgColor="#cce6ff"
      />

      <CustomButton
        text="Submit"
        bgColor="#3D7DEB"
        textColor={'#fff'}
        onPress={createPost}
      />
    </View>
  );
};

export default HireTalentScreen;
