import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (
    <View>
      <CustomButton
        text="Sign In"
      
        // bgColor="bg-[#3D7DEB]"
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default HomeScreen;

