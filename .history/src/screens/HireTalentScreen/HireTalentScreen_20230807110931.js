import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

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
        <CustomButton text="Upload File" type=/>
        <View className="file-path-wrapper">
          <CustomInput className="file-path validate" type="text" />
        </View>
      </View>

    </View>
  );
};

export default HireTalentScreen;
