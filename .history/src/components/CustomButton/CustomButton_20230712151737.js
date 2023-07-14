import { Text , Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, bgColor}) => {
     const buttonStyles = {
    
    backgroundColor: bgColor,
  };
  return (
    <Pressable onPress={onPress} className=" px-10">
      <Text
        style={buttonStyles}
        className=" w-full p-3 my-5 rounded-lg text-center text-white font-bold">
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;