import {View, Text, TextInput, TouchableOpacity,ScrollView,Alert} from 'react-native';
import React,{useState,useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/AuthContext';

const FindWorkScreen = ({postId, userId}) => {
  const [searchText, setSearchText] = useState('');

  const {isSignedIn, signOut} = useContext(AuthContext);
  const [isApplied, setIsApplied] = useState(false);

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

        const userAppliedPostIds = result.posts.flatMap(post =>
          post.apply.map(appliedUser => appliedUser._id),
        );

        // Map over the posts and set the 'applied' property
        const modifiedData = result.posts.map(post => ({
          ...post,
          applied: userAppliedPostIds.includes(post._id),
        }));

        setData(modifiedData);
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
    navigation.navigate('Applicant', {userid: '64c232b96c0de784b892a804'});
  };
  const onapply = () => {
    console.log('presssedd to apply');
  };
  const onunapply = () => {
    console.log('presssedd to unapply');
  };

  const 


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
              posted by:{' '}
              <Text className="text-[#3D7DEB]">{item.postedBy.username}</Text>
            </Text>
            {isApplied ? (
              
                <CustomButton
                  text="UnApply"
                  onPress={onunapply}
                  bgColor="#3D7DEB"
                  textColor={'#fff'}
                />
              ) : (
                <CustomButton
                  text="Apply"
                  onPress={onapply}
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
