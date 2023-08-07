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
        <V className="btn">
          <span>Upload Image</span>
          <input type="file" />
        </V>
        <V className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </V>

    </View>
  );
};

export default HireTalentScreen;
