import {View, Text, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
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
        const response = await fetch(
          'https://hiremate-hnjv.onrender.com/allpost',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          },
        );

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

  const handleOnGetApplicants = (postId) => {
    navigation.navigate('Applicant',{postId});
  };

  const apply = async (id) => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      const response = await fetch('https://hiremate-hnjv.onrender.com/apply', {
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
       const newAppliedStates = {...appliedStates, [id]: true};
       setAppliedStates(newAppliedStates);
      const newData = data.map(item => {
        if (item._id === result._id) {
          return result;
        } else {
          return item;
        }
      });
      setData(newData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

  };
    const unapply = async id => {
      try {
        const token = await AsyncStorage.getItem('jwt');
        const response = await fetch(
          'https://hiremate-hnjv.onrender.com/unapply',
          {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
              postId: id,
            }),
          },
        );
        const result = await response.json();
        console.log(result);
          const newAppliedStates = {...appliedStates, [id]: false}; // Update the applied state for the specific item
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
      <View className=" flex ">
        <TextInput
          className="border mt-5  p-4 rounded-full text-lg "
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} className="ml-80 mt-[-39] ">
          <Icon name="search" size={30} color="#3D7DEB" />
        </TouchableOpacity>
      </View>

      {data.map(item => {
        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-2xl">
            <Text className="pl-2 font-bold mt-5 text-xl text-black">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg text-black">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md text-black">{item.amount} ksh</Text>
            <Text className=" mt-3 pl-4 text-md text-black">
              posted by:{' '}
              <Text className="text-[#3D7DEB]">{item.postedBy.username}</Text>
            </Text>
            {appliedStates[item._id] ? (
              <CustomButton
                text="unApply"
                onPress={() => unapply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
            ) : (
              <CustomButton
                text="Apply"
                onPress={() => apply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
            )}
            <CustomButton
              text={item.apply.length + ' applicants'}
              onPress={() => handleOnGetApplicants(item._id)}
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
