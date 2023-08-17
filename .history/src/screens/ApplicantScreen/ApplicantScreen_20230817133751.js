import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';

const ApplicantScreen = () => {

  const route = useRoute(); // Get the route object

  useEffect(() => {
    const {params} = route;
    if (params && params.userid) {
      console.log(params.userid); // Now you can access the userid parameter
    }
  }, [route]);

  useEffect(() => {
    


  return (
    <View>
      <Text>Applicants for this Post:</Text>

    </View>
  );
};

export default ApplicantScreen;
