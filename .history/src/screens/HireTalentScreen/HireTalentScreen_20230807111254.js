import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HireTalentScreen = () => {
  return (
    <View className="border marg">
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
        <CustomButton
          text="Upload File"
          type="file"
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <View className="file-path-wrapper">
          <CustomInput className="file-path validate" type="text" />
        </View>
      </View>
    </View>
  );
};

export default HireTalentScreen;
