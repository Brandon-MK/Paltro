import React from 'react';
import {View} from 'react-native';
import SocialHeader from '../../components/SocialHeader';
import SocialCard from '../../components/SocialCard';
import {ThemeContext} from '../../theme/themeManger';

const HomeSocial = () => {
  const {styles} = React.useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <SocialHeader />
      <SocialCard />
    </View>
  );
};

export default HomeSocial;
