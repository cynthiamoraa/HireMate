import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput/CustomInput';

const FindWorkScreen = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      // Implement your search logic here based on the `searchText` state
      console.log('Search for:', searchText);
    };
  return (
    <View className="m-4">
      <Text className="text-center font-bold mt-5 text-lg">FindWork</Text>
      <View className=" flex-row items-center ">
        <TextInput
          className="border mt-5 flex-1  px-10 "
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} className="ml-80">
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="border mt-10">
        <Text className="pl-2 font-bold mt-5 text-xl">FindWork</Text>
        <Text className=" mt-3 pl-4 text-lg">FindWork</Text>
        <CustomInput
          placeholder="get in touch"
          placeholderTextColor="#000"
          type="text"
        />
      </View>
    </View>
  );
};

export default FindWorkScreen;
