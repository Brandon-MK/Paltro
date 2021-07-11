import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodContent = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 15}}>Recommended</Text>
      <View style={{marginTop: 10}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXRzfGVufDB8MXwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: 200, height: 120, borderRadius: 10}}
        />
      </View>
      <View>
        <Text>Herman's Resturant</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="ios-star" color={'#ffb100'} size={17} />
          <Text>4.9</Text>
        </View>
        <Text style={{marginHorizontal: 5}}>•</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="time-outline" size={17} color={'grey'} />
          <Text style={{fontSize: 12}}>25 - 30 min</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#fff',
            minWidth: 20,
            borderRadius: 10,
            width: 40,
            elevation: 1,
          }}>
          <Text style={{padding: 2}}>Beef</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodContent;
