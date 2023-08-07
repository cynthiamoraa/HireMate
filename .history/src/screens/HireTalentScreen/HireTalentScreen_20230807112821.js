import { View, Text } from 'react-native';
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
      <View className="flex-row items-center">
        <CustomButton
          className="flex-1"
          text="File"
          type="file"
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
        <CustomInput className="flex-2" type="text" placeholder="Upload fileee" />
      </View>
    </View>
  );
};

export default HireTalentScreen;
