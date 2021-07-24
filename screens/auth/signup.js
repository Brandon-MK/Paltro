import React, {useRef} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {
  FirstScreen,
  SecondScreen,
  ThirdScreen,
  FourthScreen,
  FifthScreen,
} from '../../components/signupScreens';
import {useNavigation} from '@react-navigation/native';

export const SignUp = () => {
  var myScroll = useRef();
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;

  const ScrollToNext = index => {
    return myScroll.current.scrollTo({x: width * index, animated: true});
  };

  const navigate = () => {
    return navigation.navigate('HomeSocial');
  };

  return (
    <ScrollView
      scrollEnabled={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      ref={myScroll}>
      <View style={{flexDirection: 'row'}}>
        <FirstScreen onPress={() => ScrollToNext(1)} />
        <SecondScreen onPress={() => ScrollToNext(2)} />
        <ThirdScreen onPress={() => ScrollToNext(3)} />
        <FourthScreen onPress={() => ScrollToNext(4)} />
        <FifthScreen onPress={() => navigate()} />
      </View>
    </ScrollView>
  );
};
export default SignUp;
