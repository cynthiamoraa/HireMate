import { Text , Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress,text,type}) => {
     let buttonColorClass = '';

     switch (type) {
       case 'primary':
         buttonColorClass = 'bg-#3D7DEB]';
         break;
       case 'secondary':
         buttonColorClass = 'bg-gray-500';
         break;
       case 'success':
         buttonColorClass = 'bg-green-500';
         break;
       default:
         buttonColorClass = 'bg-blue-500';
         break;
     }
  return (
    <Pressable onPress={onPress} className=" px-10">
      <Text className="bg-[ w-full p-3 my-5 rounded-lg text-center text-white font-bold">{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
