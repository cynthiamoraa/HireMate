import { View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({value,setValue,placeholder}) => {
  return (
    <View className="px-5">
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="w-full bg-[#F9FBFC] border-[#e8e8e8] border-1 rounded-md px-10 mx-0 my-5"
      
      />
    </View>
  );
};


export default CustomInput;
