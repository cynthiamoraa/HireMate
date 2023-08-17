import { View, Text ,FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';

const ApplicantScreen = () => {
const [applicants, setApplicants] = useState([]);

  const route = useRoute(); // Get the route object

  useEffect(() => {
    const {params} = route;
    if (params && params.userid) {
      console.log(params.userid); // Now you can access the userid parameter
    }
  }, [route]);

// useEffect(() => {
//   // Fetch applicants based on postId from the route params
//   const fetchApplicants = async (postid) => {
//     try {

//       const response = await fetch(`http://172.18.0.1:8000/post/${postid}`);
//       const data = await response.json();
//       setApplicants(data.apply);
//     } catch (error) {
//       console.error('Error fetching applicants:', error);
//     }
//   };

//   fetchApplicants();
// }, []);

  return (
    <View>
      <Text>Applicants for this Post:</Text>
     
    </View>
  );
};

export default ApplicantScreen;
