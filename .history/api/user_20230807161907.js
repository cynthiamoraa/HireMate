const signin = async (use) => {
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
