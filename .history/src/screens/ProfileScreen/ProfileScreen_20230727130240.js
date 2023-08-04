import { View, Text } from 'react-nati
ve';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
      // Retrieve the user data from AsyncStorage
      const getUserData = async () => {
        try {
          const userString = await AsyncStorage.getItem('user');
          if (userString) {
            const userData = JSON.parse(userString);
            setUsername(userData.username);
          }
        } catch (error) {
          console.error('Error retrieving user data:', error);
        }
      };

      getUserData();
    }, []);
  return (
    <View className="p-10">
      <Icon name="user-circle" size={150} className="p-5 bg-[#3D7DEB]" />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
