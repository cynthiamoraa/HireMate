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
      <View
    </View>
  );
};

export default HireTalentScreen;
