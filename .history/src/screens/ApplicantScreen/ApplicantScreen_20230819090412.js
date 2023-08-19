import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {

  
      const [userData, setUserData] = useState(null);




  return (
    <View>
      <Text>Applicants for this Post:</Text>
      {userData && (
        <View>
          <Text>Username: {userData.username}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
