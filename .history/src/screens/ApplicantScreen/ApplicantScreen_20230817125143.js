import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';

const ApplicantScreen = ({}) => {
     const [post, setPost] = useState(null);

     useEffect(() => {
       async function fetchPost() {
         try {
           const postId = match.params.postId;
           const response = await fetch(`/api/post/${postId}`);
           const data = await response.json();
           setPost(data);
         } catch (error) {
           console.error('Error fetching post details:', error);
         }
       }

       fetchPost();
     }, [match.params.postId]);

  return (
    <View>
      <Text>ApplicantScreen</Text>
    </View>
  );
};

export default ApplicantScreen;
