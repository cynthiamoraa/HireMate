import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';

const HireTalentScreen = () => {
  return (
    <View>
      <CustomInput
        placeholder="Enter your name"
        placeholderTextColor="#000"
      />
    </View>
  );
};

export default HireTalentScreen;
