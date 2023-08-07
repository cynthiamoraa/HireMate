import { View } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const PostData = async () => {
    try {
      // Make the POST request to the server
      const response = await fetch('http://172.18.0.1:8000/createpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();
      console.log(data);

      // Handle success and navigation
      console.log('Success:', data);
      navigation.navigate('Home');
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      // You can display an error message to the user here if needed.
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
      <CustomButton text="Submit" bgColor="#3D7DEB" textColor={'#fff'} onPress={PostData} />
    </View>
  );
};

export default HireTalentScreen;
