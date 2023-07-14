import { Text , Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, bgColor, textColor}) => {
  return (
    <Pressable onPress={onPress} className=" px-10 ">
      <Text
        style={{backgroundColor: bgColor, color: textColor}}
        className=" w-full p-3 my-5 rounded-lg text-center t font-bold">
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
