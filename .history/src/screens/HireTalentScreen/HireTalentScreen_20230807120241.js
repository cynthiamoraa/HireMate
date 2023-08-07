import { View } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HireTalentScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  return (
    <View className="border m-3">
      <CustomInput
        placeholder="Title"
        placeholderTextColor="#000"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <CustomInput
        placeholder="Description"
        placeholderTextColor="#000"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <View className="flex-row  items-center ">
        <View className="mr-[]">
          <CustomButton text="Upload" bgColor="#3D7DEB" textColor={'#fff'} />
        </View>
        <View>
          <CustomInput type="text" placeholder="Upload fileee" />
        </View>
      </View>
      <CustomButton text="Submit" bgColor="#3D7DEB" textColor={'#fff'} />
    </View>
  );
};

export default HireTalentScreen;
