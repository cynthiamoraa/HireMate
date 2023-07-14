import { View, Text } from 'react-native'
import React from 'react'
import

const SocialSignInButtons = () => {
  return (
       <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#E7EAF4"
          textColor={'#4765A9'}
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#FAE9EA"
          textColor={'#DD4D44'}
        />
        <CustomButton
          text="Sign In with email"
          onPress={onSignInEmail}
          bgColor="#E3E3E3"
          textColor={'#363636'}
        />
  )
}

export default SocialSignInButtons