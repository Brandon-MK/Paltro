import React, {useRef} from 'react';
import {View, Text, Image, Alert, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {ThemeContext} from '../MainContext/MainContext';

const LoadingScreen = ({route}) => {
  const {email} = route.params;
  const navigation = useNavigation();
  const {ChangeUserId} = React.useContext(ThemeContext);

  ChangeUserId();
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert('Stop sign up', "You won't have an account on Paltro", [
          {text: "Don't leave", style: 'cancel', onPress: () => {}},
          {
            text: 'Discard',
            style: 'destructive',
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]);
      }),
    [navigation],
  );
  setTimeout(() => {
    navigation.navigate('HomeSocial');
  }, 2000);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <LottieView
        source={require('../assets/lf30_editor_ad1iqvum.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />
      <View>
        <Text style={{fontSize: 18}}>Setting up your account</Text>
      </View>
    </View>
  );
};
export default LoadingScreen;
