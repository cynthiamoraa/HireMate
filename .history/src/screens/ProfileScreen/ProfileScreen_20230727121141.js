import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View>
      <Icon name="user-circle" size={100} style={styles.profileIcon} />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
