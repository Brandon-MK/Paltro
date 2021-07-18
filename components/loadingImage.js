import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const LoadingImage = ({type}) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: type == 'user' ? 50 : 0,
      }}>
      {type == 'user' ? (
        <Feather name="user" size={15} />
      ) : (
        <Feather name="image" size={15} />
      )}
    </View>
  );
};

export default LoadingImage;
