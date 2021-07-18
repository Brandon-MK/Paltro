import React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Slider} from 'react-native-elements';

const PodcastPlayer = ({route}) => {
  const navigation = useNavigation();
  const {image, name, creator} = route.params;
  return (
    <View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Entypo name="chevron-left" size={25} />
        </View>
        <View>
          <Text>Now Playing</Text>
        </View>
        <View>
          <Entypo name="dots-three-vertical" size={20} />
        </View>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Image
          source={{uri: image}}
          style={{width: 250, height: 250}}
          borderRadius={10}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginTop: 10, fontSize: 20}}>
          {JSON.stringify(creator).slice(1, creator.length + 1)}
        </Text>
        <Text style={{margin: 10, fontFamily: 'Roboto-Medium', fontSize: 23}}>
          {JSON.stringify(name).slice(1, name.length + 1)}
        </Text>
        <Text style={{fontFamily: 'Roboto-ThinItalic', color: 'grey'}}>
          Ep.10 : {JSON.stringify(name).slice(1, name.length + 1)}
        </Text>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>3:00</Text>
          <Text>1:09</Text>
        </View>
        <View>
          <Slider
            thumbStyle={{width: 30, height: 30}}
            thumbTintColor={'white'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Entypo name="list" size={25} />
            <Entypo name="controller-fast-backward" size={25} />
            <View
              style={{
                backgroundColor: 'white',
                width: 60,
                height: 60,
                borderRadius: 50,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo
                name="controller-play"
                size={35}
                style={{marginLeft: 5}}
              />
            </View>
            <Entypo name="controller-fast-forward" size={25} />
            <Entypo name="heart-outlined" size={25} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PodcastPlayer;
