import {View, Text, TextInput, TouchableOpacity,ScrollView,Alert} from 'react-native';
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FindWorkScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [username, setUsername] = useState('');
    const [showApplyButton, setShowApplyButton] = useState(true);
    const navigation = useNavigation();



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
        const data1 = {result};
        console.log(result);
       
       setData(result.posts);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
    fetchData();
    }, []);

    const handleApply = async (postid) => {
      console.log('presssedd to apply');
      try {
        const token = await AsyncStorage.getItem('jwt');

        const response = await fetch('http://172.18.0.1:8000/apply', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            postId: postid,
            
          }),
        });
        const result = await response.json();
        console.log('result');
       
      
        const newData = data.map(item => {
          if (item._id === result._id) {
            return result;
          } 
        });
        setData(newData);
      }
      catch (error) {
        console.error('Error:', error);
      }
      setShowApplyButton(false);
      Alert.alert('Applied Successfully');
    };


       const handleUnapply = async postid => {
         console.log('presssedd to unapply');
         try {
           const token = await AsyncStorage.getItem('jwt');
           const response = await fetch('http://172.18.0.1:8000/unapply', {
             method: 'put',
             headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + token,
             },
             body: JSON.stringify({
               postId: postid,
             }),
           });
           const result = await response.json();
           console.log(result);
           const newData = data.map(item => {
             if (item._id === result._id) {
               return result;
             } else {
               return item;
             }
           });
           setData(newData);
         } catch (error) {
           console.error('Error:', error);
         }
         Alert.alert('unapplied Successfully');
         setShowApplyButton(true);
       };

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
      navigation.navigate('Applicant', {userid: '64c232b96c0de784b892a804'});
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
        <TouchableOpacity onPress={handleSearch} className="ml-80 mt-[-39]">
          <Icon name="search" size={30} color="#3D7DEB" />
        </TouchableOpacity>
      </View>

      {data.map(item => {

        return (
          <View key={item._id} className="border mt-10 bg-slate-200 rounded-sm">
            <Text className="pl-2 font-bold mt-5 text-xl">{item.title}</Text>
            <Text className=" mt-3 pl-4 text-lg">{item.body}</Text>
            <Text className=" mt-3 pl-4 text-md">
              posted by: <Text className="text-[#3D7DEB]">{username}</Text>
            </Text>
            {showApplyButton ? (
              <CustomButton
                text="Apply"
                onPress={() => handleApply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
            ) : (
              <CustomButton
                text="UnApply"
                onPress={() => handleUnapply(item._id)}
                bgColor="#3D7DEB"
                textColor={'#fff'}
              />
            )}

            <CustomButton
              text={item.apply.length + ' Applied'}
              onPress={handleOnGetApplicants}
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
