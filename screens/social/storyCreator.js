import React from 'react';
import {View, Text, Image, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StoryCreator = () => {
  return (
    <LinearGradient colors={['#18cc21', '#00d4ff']} style={{flex: 1}}>
      <Animated.View>
        <Animated.Text>Story Text</Animated.Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default StoryCreator;
