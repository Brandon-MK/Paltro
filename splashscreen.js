import React, {useContext} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {ThemeContext} from './MainContext/MainContext';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const {styles} = useContext(ThemeContext);
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('HomeSocial');
  }, 5000);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styles.Background,
      }}>
      <Image
        source={require('./images/icon.png')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default SplashScreen;
