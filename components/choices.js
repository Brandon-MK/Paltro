import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Choices = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TouchableOpacity
        style={[
          styles.choice,
          {
            backgroundColor: props.Social ? '#00b1f7' : '#f4f8ff',
            elevation: props.Social ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomeSocial');
        }}>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Social</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.choice,
          {
            backgroundColor: props.Shop ? '#00e306' : '#f4f8ff',
            elevation: props.Shop ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomeShop');
        }}>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Shopping</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.choice,
          {
            backgroundColor: props.Music ? '#8400f7' : '#f4f8ff',
            elevation: props.Music ? 5 : 0,
          },
        ]}
        onPress={() => {
          navigation.navigate('HomePodcast');
        }}>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Podcasts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  choice: {
    width: '95%',
    height: 45,
    padding: 5,
    borderRadius: 10,
  },
});

export default Choices;
