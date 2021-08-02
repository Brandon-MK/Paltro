import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './bottomSheet';
import Choices from './choices';
import {ThemeProvider, ThemeContext} from '../MainContext/MainContext';
import {useNavigation} from '@react-navigation/native';

const SocialHeader = () => {
  const refRBSheet = useRef();
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
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
        <Ionicons
          name="search-outline"
          size={35}
          color={styles.textColor}
          onPress={() => navigation.navigate('ShopSearch')}
        />
        <Ionicons
          name="notifications-outline"
          size={35}
          color={styles.textColor}
          onPress={() => navigation.navigate('ShopNotifications')}
        />
      </View>

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {backgroundColor: styles.Background},
        }}>
        <Choices Shop={true} />
      </BottomSheet>
    </View>
  );
};

export default SocialHeader;
