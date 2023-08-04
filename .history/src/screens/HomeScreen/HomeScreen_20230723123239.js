import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (

    <View>
      <Text>HomeScreen</Text>
      <CustomButton>
        <Text>Sign In</Text>
      </CustomButton>
    </View>

  );
};

export default HomeScreen;

