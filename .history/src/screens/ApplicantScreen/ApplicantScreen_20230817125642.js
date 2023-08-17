import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

const ApplicantScreen = ({match}) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Fetch applicants based on postId from the route params
    const fetchApplicants = async () => {
      try {
        const postId = route.params.postId;
        const response = await fetch(`YOUR_API_URL/api/post/${postId}`);
        const data = await response.json();
        setApplicants(data.apply);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, [route.params.postId]);

  return (
    <View>
      <Text>Applicants for this Post:</Text>
      <FlatList
        data={applicants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
