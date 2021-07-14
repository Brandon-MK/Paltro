import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodContent = props => {
  return (
    <View style={{padding: 10}}>
      <View style={{marginTop: 10}}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{width: 200, height: 120, borderRadius: 10}}
        />
      </View>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="ios-star" color={'#ffb100'} size={17} />
          <Text>{props.stars}</Text>
        </View>
        <Text style={{marginHorizontal: 5}}>•</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="time-outline" size={17} color={'grey'} />
          <Text style={{fontSize: 12}}>{props.time} min</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.types.map(item => {
          return (
            <View
              style={{
                backgroundColor: '#fff',
                minWidth: 20,
                borderRadius: 10,
                marginHorizontal: 5,
                elevation: 1,
              }}
              key={item.key}>
              <Text style={{padding: 3}}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FoodContent;
