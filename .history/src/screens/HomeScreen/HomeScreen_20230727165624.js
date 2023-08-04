import { View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const onFindWorkPressed = ()=>{
    console.log('Find work button pressed');
    navigation.navigate('FindWork');
  };
  return (
    <View className="justify-center mt-48 ">
      <CustomButton text="find work" onPress={onFindWorkPressed} bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="Hire" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="learn more" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HomeScreen;

