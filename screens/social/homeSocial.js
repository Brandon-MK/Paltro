import React from 'react';
import {View} from 'react-native';
import SocialHeader from '../../components/SocialHeader';
import SocialCard from '../../components/SocialCard';
import SocialStory from '../../components/SocialStory';

const HomeSocial = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#efefef'}}>
      <SocialHeader />
      <SocialStory />
      <SocialCard />
    </View>
  );
};

export default HomeSocial;
