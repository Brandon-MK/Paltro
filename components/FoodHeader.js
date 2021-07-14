import React, {useRef} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Input} from 'native-base';
import Choices from './choices';
import BottomSheet from './bottomSheet';

const FoodHeader = () => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
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

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Feather
            name="map-pin"
            size={20}
            style={{marginRight: 10}}
            color={'#ffcf00'}
          />
          <Text style={{fontSize: 15}}>800 Cheese Avenue</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Input
          placeholder={'Search for food'}
          variant={'filled'}
          underlineColorAndroid={'transparent'}
          style={{paddingLeft: 0}}
          InputLeftElement={
            <Ionicons
              name="search-outline"
              size={25}
              color={'black'}
              style={{padding: 5}}
            />
          }
        />
      </View>

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}>
        <Choices Food={true} />
      </BottomSheet>
    </View>
  );
};

export default FoodHeader;
