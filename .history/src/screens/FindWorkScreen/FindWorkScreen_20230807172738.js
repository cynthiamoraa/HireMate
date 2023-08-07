import { View, Text } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';

const FindWorkScreen = () => {
  return (
    <View className="">
      <Text className="text-center font-bold mt-5 text-lg">FindWork</Text>
      <View className="border mt-10">
        <Text className="pl-2 font-bold mt-5 text-xl">FindWork</Text>
        <Text className=" mt-3 pl-4 text-lg">FindWork</Text>
        <CustomInput
          placeholder="Username"
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
};

export default FindWorkScreen;
