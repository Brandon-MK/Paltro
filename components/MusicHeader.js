import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from './bottomSheet';
import {Input} from 'native-base';
import Choices from './choices';

const MusicHeader = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '30%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={require('../images/icon.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{fontSize: 25, fontFamily: 'Roboto-Bold', color: 'white'}}>
            Hello Mike
          </Text>
          <Text
            style={{fontSize: 15, fontFamily: 'Roboto-Light', color: 'white'}}>
            Listen to what fits you.
          </Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Ionicons
          name="search-outline"
          size={35}
          color={'white'}
          style={{marginLeft: 10, marginRight: -5}}
          onPress={() => navigation.navigate('SearchMusic')}
        />
      </View>

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}>
        <Choices Music={true} />
      </BottomSheet>
    </View>
  );
};

export default MusicHeader;
