// AuthContext.js
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check if the user is already signed in when the app starts
  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('jwt');
        if (token) {
          setIsSignedIn(true);
        }
      } catch (error) {
        console.error('Error checking sign-in status:', error);
      }
    };
    checkSignInStatus();
  }, []);

  const signIn = async (username, email, password) => {
    try {
      // Make the POST request to the server's sign-in API endpoint
      const response = await fetch('http://172.18.0.1:8000/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();

      if (response.ok) {
        AsyncStorage.setItem('jwt', data.token);
        AsyncStorage.setItem('user', JSON.stringify(data.user));
        // Sign-in success
        // Store authentication tokens or user data in state/local storage
        console.log('Sign-in successful:', data);
        navigation.navigate('Home');
      } else {
        // Sign-in failed
        console.log('Sign-in failed:', data.message);
        // Display an error message to the user
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Error:', error);
      // Display an error message to the user or handle the error gracefully
    }
  };

  const signOut = async () => {
    // Implement your sign-out logic here
    try {
      await AsyncStorage.removeItem('jwt');
      setIsSignedIn(false);
    }
          const data = await response.json();

      if (response.ok) {
        AsyncStorage.setItem('jwt', data.token);
        AsyncStorage.setItem('user', JSON.stringify(data.user));
        // Sign-in success
        // Store authentication tokens or user data in state/local storage
        console.log('Sign-in successful:', data);
        navigation.navigate('Home');
      } else {
        // Sign-in failed
        console.log('Sign-in failed:', data.message);
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const navigation = useNavigation();
  return (
    <AuthContext.Provider value={{isSignedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
