import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './bottomSheet';
import Choices from './choices';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../theme/themeManger';
import LoadingImage from './loadingImage';

const SocialHeader = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const {styles} = React.useContext(ThemeContext);
  const [Loading, setLoading] = React.useState(true);
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: styles.cardBackground,
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

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: styles.profileCard,
          padding: 8,
          borderRadius: 50,
          width: '42%',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('ProfileSocial');
        }}>
        <View>
          <View style={{elevation: 5, marginRight: 5, borderRadius: 50}}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                borderColor: styles.borderColor,
                borderWidth: 2,
              }}
              onLoadEnd={() => setLoading(false)}
            />
          </View>
          {Loading ? <LoadingImage type={'Image'} /> : null}
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            color: styles.textColor,
          }}>
          Mick John
        </Text>
      </TouchableOpacity>

      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}>
        <Choices Social={true} />
      </BottomSheet>
    </View>
  );
};

export default SocialHeader;
