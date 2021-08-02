import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeProvider, ThemeContext} from '../theme/themeManger';

const Choices = props => {
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: styles.Background,
      }}>
      <TouchableOpacity
        style={[
          styles2.choice,
          {
            backgroundColor: props.Social ? '#00b1f7' : '#f4f8ff',
            elevation: props.Social ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomeSocial');
        }}>
        <Ionicons name="ios-rocket-outline" size={25} />
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Community</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles2.choice,
          {
            backgroundColor: props.Shop ? '#00e306' : '#f4f8ff',
            elevation: props.Shop ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomeShop');
        }}>
        <Ionicons name="card-outline" size={25} />
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Purchase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles2.choice,
          {
            backgroundColor: props.Music ? '#8400f7' : '#f4f8ff',
            elevation: props.Music ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomePodcast');
        }}>
        <Ionicons name="mic-outline" size={28} />
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Podcasts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles2 = StyleSheet.create({
  choice: {
    width: '95%',
    height: 45,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Choices;
