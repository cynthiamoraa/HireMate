import { View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import

const HomeScreen = () => {
  return (
    <View className="justify-center mt-48 ">
      <CustomButton text="find work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="post work" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="learn more" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HomeScreen;

