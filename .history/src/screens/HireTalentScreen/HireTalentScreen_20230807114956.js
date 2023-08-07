import { View, use } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HireTalentScreen = () => {
  return (
    <View className="border m-3">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#000"
        type="text"
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
