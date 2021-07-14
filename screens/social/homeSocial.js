import React from 'react';
import {View} from 'react-native';
import SocialHeader from '../../components/SocialHeader';
import SocialCard from '../../components/SocialCard';
import SocialStory from '../../components/SocialStory';
import {ThemeContext} from '../../theme/themeManger';

const HomeSocial = () => {
  const {styles} = React.useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <SocialHeader />
      <SocialStory />
      <SocialCard />
    </View>
  );
};

export default HomeSocial;
