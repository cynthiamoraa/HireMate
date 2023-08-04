import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (
    <View className="justify-center mt-48">
      <CustomButton text="find work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="post work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="abou" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HomeScreen;

