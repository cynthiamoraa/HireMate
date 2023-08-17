import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicantScreen = () => {
  const [user, setUser] = useState(null);

    const route = useRoute();

  useEffect(() => {
    const {id} = route.params;

    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://172.18.0.1:8000/user/${userid}`);
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [route.params]);


  return (
    <View>
      <Text>Applicants for this Post:</Text>
      {user ? (
        <View>
          <Text>Username: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          {/* Other user details */}
        </View>
      ) : (
        <Text>Loading user details...</Text>
      )}
    </View>
  );
};

export default ApplicantScreen;
