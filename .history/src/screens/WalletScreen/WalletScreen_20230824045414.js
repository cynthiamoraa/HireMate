const fetchBalance = async () => {
  try {
    const token = await AsyncStorage.getItem('jwt');
    const response = await fetch(
      'https://hiremate-hnjv.onrender.com/getwallet',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      },
    );
    const result = await response.json();

    setBalance(result.balance);
    console.log('fetchb', result.balance);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
