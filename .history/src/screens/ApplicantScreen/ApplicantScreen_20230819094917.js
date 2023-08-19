import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindWorkScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [appliedStates, setAppliedStates] = useState({});
  const navigation = useNavigation();

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
        const appliedStatesObj = {};
        result.posts.forEach(post => {
          appliedStatesObj[post._id] = false; // Initialize all states as false
        });

        setAppliedStates(appliedStatesObj);

        setData(result.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter(item => {
      const titleMatches = item.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const bodyMatches = item.body
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return titleMatches || bodyMatches;
    });

    // Update the data state with the filtered data
    setData(filteredData);
    console.log('Search for:', searchText);
  };

  const handleOnGetApplicants = () => {
    navigation.navigate('Applicant');
  };

  const apply = async id => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('http://172.18.0.1:8000/apply', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      const result = await response.json();
      console.log(result);
      const newAppliedStates = {...appliedStates, [id]: true}; // Update the applied state for the specific item
      setAppliedStates(newAppliedStates);
      const newData = data.map(item => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4">
      <Text className="text-center font-bold mt-5 text-lg">FindWork</Text>
      

      {data.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md">
              posted by:{' '}
              <Text className="text-[#3D7DEB]">{item.postedBy.username}</Text>
            </Text>
        
              <CustomButton
                text="Apply"
                onPress={() => apply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />

              

          </View>
        );
      })}
    </ScrollView>
  );
};

export default FindWorkScreen;
