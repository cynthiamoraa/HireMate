import { View } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const PostData = async () => {
    try {
      // Make the POST request to the server
      const response = await fetch('http://3.3.2.103:8000/creat', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();
      console.log(data);

      // Handle success and navigation
      console.log(username, password, email);
      navigation.navigate('Signin');
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      // You can display an error message to the user here if needed.
    }
  };
  return (
    <View className="border m-3">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#000"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <CustomInput
        placeholder="Description"
        placeholderTextColor="#000"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <View className="flex-row  items-center ">
        <View className="mr-[-50]">
          <CustomButton text="Upload" bgColor="#3D7DEB" textColor={'#fff'} />
        </View>
        <View className="">
          <CustomInput type="text" placeholder="" />
        </View>
      </View>
      <CustomButton text="Submit" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HireTalentScreen;
