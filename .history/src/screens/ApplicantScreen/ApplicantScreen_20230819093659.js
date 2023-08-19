import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch the applicants data here (initially or whenever needed)
  //   apply();
  // }, []);

  const apply = async (id) => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('http://172.18.0.1:8000/apply', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      const result = await response.json();
      console.log(result.apply);
    
     
      setData(result.apply);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <View>
      <Text>Applicants for this Post:</Text>
          {data.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md">
              posted by:{' '}
              <Text className="text-[#3D7DEB]">{item.postedBy.username}</Text>
            </Text>
            {appliedStates[item._id] ? (
              <CustomButton
                text="unApply"
                onPress={() => unapply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
    </View>
  );
};

export default ApplicantScreen;
