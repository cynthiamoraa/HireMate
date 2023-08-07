import { View } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View className="border m-3">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#000"
        type="text"
        onCha
      />
      <CustomInput
        placeholder="Description"
        placeholderTextColor="#000"
        type="text"
      />
        <CustomInput  type="text" placeholder="Upload fileee" />
      <CustomButton text="Submit" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HireTalentScreen;
