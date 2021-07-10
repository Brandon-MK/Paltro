import React from 'react';
import {View, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'native-base';

const TextCard = props => {
  const TimeStamp = time => {
    const Months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    };
    const currentTime = new Date();
    return (
      <Text
        style={{
          fontSize: 10,
          color: 'grey',
        }}>{`${time.getDate()} ${
        Months[time.getMonth()]
      } ${time.getFullYear()}`}</Text>
    );
  };
  return (
    <View
      style={[
        {
          width: '95%',
          borderRadius: 10,
          elevation: 2,
          alignSelf: 'center',
          backgroundColor: 'white',
          marginVertical: 10,
        },
        props.customStyles,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 7,
          marginTop: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: props.ProfileImage,
            }}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15}}>{props.Name}</Text>
            <Text style={{fontSize: 13}}>@{props.Username}</Text>
          </View>
        </View>
        <View>
          <Feather name="more-horizontal" size={24} />
        </View>
      </View>
      <View style={{paddingVertical: 10}}>
        <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
          <Text>{props.Text}</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, color: 'grey'}}>
            {TimeStamp(props.Timestamp)}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '23%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Ionicons name="heart-outline" size={32} color={'black'} />
          </View>
          <View>
            <Ionicons name="ios-chatbox-outline" size={29} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextCard;
