import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppState} from 'react-native';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigation = useNavigation();

  // Function to check and set the authentication state based on AsyncStorage
  const checkSignInStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      setIsSignedIn(!!token); // !!token converts null/undefined to false, and any other value to true
    } catch (error) {
      console.error('Error checking sign-in status:', error);
    }
  };

  // Check if the user is already signed in when the app starts
  useEffect(() => {
    checkSignInStatus();

    // Subscribe to app state changes (when the app goes to the background or gets closed)
    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        // Save the authentication state to AsyncStorage
        AsyncStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
      }
    };
    AppState.addEventListener('change', handleAppStateChange);

    // Unsubscribe from app state changes when the component unmounts
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [isSignedIn]);

  const signIn = async (username, email, password) => {
    
    // ... Your sign-in logic remains the same ...
    setIsSignedIn(true);
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('jwt');
      setIsSignedIn(false);
      // Navigate to the login screen after signing out
      navigation.navigate('Signin');
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
