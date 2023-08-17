import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
const TopUpScreen = () => {
  return (
    <View>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
    </View>
  );
};

export default TopUpScreen;
