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
   const onHireTalentPressed = () => {
     console.log('Find work button pressed');
     navigation.navigate('FindWork');
   };
   

  return (
    <View className="justify-center mt-48 ">
      <CustomButton text="Find Work" onPress={onFindWorkPressed} bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="Hire Talent" bgColor="#3D7DEB" textColor={'#fff'} />
      <CustomButton text="Learn More" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HomeScreen;

