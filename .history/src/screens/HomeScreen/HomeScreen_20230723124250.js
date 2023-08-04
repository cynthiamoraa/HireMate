import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (
    <View className=" mt-48 justify-">
      <CustomButton text="find work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="post work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="learn more" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HomeScreen;

