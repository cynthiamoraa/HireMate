import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

const ApplicantScreen = ({}) => {
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
      <Text>ApplicantScreen</Text>
      {post && (
        <View>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
          <Text>Applicants:</Text>
          <ul>
            {post.apply.map(user => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        </View>
      )}
    </View>
  );
};

export default ApplicantScreen;
