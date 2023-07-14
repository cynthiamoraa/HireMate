import { Text , Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress,text,type}) => {
  return (
    <Pressable onPress={onPress} className=" px-10">
      <Text className="bg-[#3D7DEB] w-full p-3 my-5 rounded-lg text-center text-white font-bold">{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
