import React from 'react';
import {View, Text, Image} from 'react-native';

const EditImage = ({route}) => {
  const {location} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Image source={{uri: location}} style={{width: 200, height: 200}} /> */}
      <Text>{JSON.stringify(location)}</Text>
    </View>
  );
};

export default EditImage;
