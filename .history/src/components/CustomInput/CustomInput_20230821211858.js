import { View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  bgColor,
  textColor,
}) => {
  return (
    <View className="px-10 ">
      <TextInput
        style={{backgroundColor: bgColor, color: textColor}}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="w-full bg-[#14408d] border-[#2257e9] text-bla rounded-md px-10 mx-0 my-5"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};


export default CustomInput;
