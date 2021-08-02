import React, {useEffect} from 'react';
import {View, BackHandler, Alert} from 'react-native';
import SocialHeader from '../../components/SocialHeader';
import SocialCard from '../../components/SocialCard';
import {ThemeContext} from '../../MainContext/MainContext';
import {GetSocialFeed} from '../../Api/SocialApi';
import axios from 'axios';

const HomeSocial = () => {
  const {styles} = React.useContext(ThemeContext);
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go home?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <SocialHeader />
      <SocialCard />
    </View>
  );
};

export default HomeSocial;
