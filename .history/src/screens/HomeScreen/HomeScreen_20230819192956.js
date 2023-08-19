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
     navigation.navigate('HireTalent');
   };
    const onLearnMorePressed = () => {
      console.log('Find work button pressed');
      navigation.navigate('LearnMore');
    };
  return (
    <View className="justify-center mt-48 bg-[#3D7DEB]">
      <CustomButton
        text="Find Work"
        onPress={onFindWorkPressed}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
      <CustomButton
        text="Hire Talent"
        onPress={onHireTalentPressed}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
      <CustomButton
        text="Learn More"
        onPress={onLearnMorePressed}
        bgColor="#3D7DEB"
        textColor={'#fff'}
      />
    </View>
  );
};

export default HomeScreen;

