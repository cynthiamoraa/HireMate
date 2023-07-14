
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
    const onSignInGoogle = ()=>{
    console.log('Sign in with google button pressed');
  };
  const onSignInApple = ()=>{
    console.log('Sign in with apple button pressed');
  };
  const onSignInEmail = ()=>{
    console.log('Sign in with email button pressed');
  };
  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
