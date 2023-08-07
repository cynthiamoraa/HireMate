// AuthContext.js
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check if the user is already signed in when the app starts
  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          setIsSignedIn(true);
        }
      } catch (error) {
        console.error('Error checking sign-in status:', error);
      }
    };
    checkSignInStatus();
  }, []);

  const signIn = async () => {
    // Implement your sign-in logic here
    try {
      // Assuming you have an authentication token after successful sign-in
      const token = 'your-authentication-token';
      await AsyncStorage.setItem('authToken', token);
      setIsSignedIn(true);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    // Implement your sign-out logic here
    try {
      await AsyncStorage.removeItem('authToken');
      setIsSignedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{isSignedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
