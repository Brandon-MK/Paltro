import React from 'react';
import SocialHeader from '../../components/SocialHeader';
import SocialCard from '../../components/SocialCard';
import {View} from 'react-native';

const HomeSocial = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#efefef'}}>
      <SocialHeader />
      <SocialCard />
    </View>
  );
};

export default HomeSocial;
