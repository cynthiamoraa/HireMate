import {View, Text, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindWorkScreen = () => {
    const [searchText, setSearchText] = useState('');
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
    const [data, setData] = useState([]);
    useEffect(() => {
   const fetchData = async () => {
     try {
       // Get the JWT token from AsyncStorage
       const token = await AsyncStorage.getItem('jwt');

       // Make the fetch request with the token in the headers
       const response = await fetch('http://172.18.0.1:8000/allpost', {
         headers: {
           Authorization: 'Bearer ' + token,
         },
       });

       const result = await response.json();
       console.log(result);
       setData(result.posts);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
    fetchData();
    }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('jwt');

        // Make the fetch request with the token in the headers
        const response = await fetch('http://172.18.0.1:8000/allpost', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        const result = await response.json();
        console.log(result);
        setData(result.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    // Filter the data array based on the searchText
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.body.toLowerCase().includes(searchText.toLowerCase());
    });

    // Update the data state with the filtered data
    setData(filteredData);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4">
      {/* ... your other code ... */}
    </ScrollView>
  );
};

export default FindWorkScreen;
In the code above, we added a new useEffect to fetch the data from the server and set it to the data state. Then, we implemented the handleSearch function, which filters the data array based on the searchText. We use the filter method to check if the title or body of each item in the data array includes the searchText, and if it does, we keep that item in the filteredData array. Finally, we update the data state with the filteredData, which causes the component to re-render and display the filtered data in the UI.







    const handleSearch = () => {
      // Implement your search logic here based on the `searchText` state
      console.log('Search for:', searchText);
    };
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4">
      <Text className="text-center font-bold mt-5 text-lg">FindWork</Text>
      <View className=" flex ">
        <TextInput
          className="border mt-5  px-10 rounded-full "
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} className="ml-80 mt-[-32]">
          <Icon name="search" size={24} color="#3D7DEB" />
        </TouchableOpacity>
      </View>

      {data.map(item => {
        return (
          <View className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md">
              posted by: <Text className="text-[#3D7DEB]">{username}</Text>
            </Text>
            <CustomInput
              placeholder="get in touch"
              placeholderTextColor="#000"
              type="text"
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FindWorkScreen;
