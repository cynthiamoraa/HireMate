import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';

const HireTalentScreen = () => {
  return (
    <View className="card input-filed">
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
      <View className="file-field input-field"> 
        <View className="btn">
          <T>Upload Image</T>
          <CustomInput type="file" />
        </View>
        <View className="file-path-wrapper">
          <CustomInput className="file-path validate" type="text" />
        </View>

    </View>
  );
};

export default HireTalentScreen;
