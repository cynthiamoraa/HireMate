import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (
    <View>
      <CustomButton
        text="get a "
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default HomeScreen;

