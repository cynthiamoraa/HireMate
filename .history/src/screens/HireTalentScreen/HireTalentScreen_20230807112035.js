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
      <View className="flex-row ">
        <CustomButton
          text="File"
          type="file"
          bgColor="#3D7DEB"
          textColor={'#fff'}
        />
          <CustomInput className="width-20px" type="text" />
      </View>
    </View>
  );
};

export default HireTalentScreen;
