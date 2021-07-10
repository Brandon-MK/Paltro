import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './bottomSheet';
import Choices from './choices';

const SocialHeader = () => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '30%',
          justifyContent: 'space-between',
        }}>
        <Ionicons name="search-outline" size={35} />
        <Ionicons name="notifications-outline" size={35} />
      </View>

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}>
        <Choices Shop={true} />
      </BottomSheet>
    </View>
  );
};

export default SocialHeader;
