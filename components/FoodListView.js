import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const FoodListView = props => {
  const Sizes = () => {
    if (props.variants === undefined) {
      return null;
    } else {
      return props.variants.map(i => {
        return (
          <View
            key={i.key}
            style={{
              backgroundColor: '#d1cfcb',
              marginRight: 5,
              borderRadius: 10,
            }}>
            <Text style={{padding: 5, fontSize: 10}}>{i.size}</Text>
          </View>
        );
      });
    }
  };
  const price = () => {
    if (props.discount) {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'grey',
              fontSize: 10,
              textDecorationLine: 'line-through',
              textDecorationColor: 'black',
            }}>
            {props.price}
          </Text>
          <Text style={{color: 'black', fontSize: 12, marginLeft: 5}}>
            {props.discountprice}
          </Text>
        </View>
      );
    } else {
      return <Text style={{color: 'grey'}}>{props.price}</Text>;
    }
  };
  const restuarant = () => {
    return props.restaurant == null ? (
      <View>
        <Text style={{fontSize: 15}}>{props.name}</Text>
        {price()}
        <View style={{flexDirection: 'row'}}>{Sizes()}</View>
      </View>
    ) : (
      <View>
        <Text style={{fontSize: 16}}>{props.restaurant}</Text>
        <View>
          <Text style={{fontSize: 13}}>{props.name}</Text>
          {price()}
          <View style={{flexDirection: 'row'}}>{Sizes()}</View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <View>
          <Image source={{uri: props.image}} style={{width: 60, height: 60}} />
        </View>
        <View style={{marginLeft: 10}}>{restuarant()}</View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '30%',
          justifyContent: 'space-between',
        }}>
        <Ionicons
          name="add"
          style={{backgroundColor: '#ffb100', borderRadius: 50}}
          size={25}
        />
        <Text stytle={{fontSize: 17}}>1</Text>
        <Feather
          name="minus"
          style={{backgroundColor: '#ffb100', borderRadius: 50}}
          size={25}
        />
      </View>
    </View>
  );
};

export default FoodListView;
