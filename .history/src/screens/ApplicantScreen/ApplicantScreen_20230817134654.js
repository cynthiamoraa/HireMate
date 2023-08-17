import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {

  const route = useRoute(); // Get the route object





  return (
    <View>
      <Text>Applicants for this Post:</Text>

    </View>
  );
};

export default ApplicantScreen;
