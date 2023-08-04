import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  return (
    <View>
      <view>
        <CustomButton>
          <Text>Sign In</Text>
        </CustomButton>
        
      </view>
    </View>
  );
};

export default HomeScreen;

