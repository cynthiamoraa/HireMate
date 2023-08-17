import { View} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

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
