import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './bottomSheet';
import Choices from './choices';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../theme/themeManger';
import LoadingImage from './loadingImage';
import axios from 'axios';

const SocialHeader = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const {styles, UserId} = React.useContext(ThemeContext);
  const [Loading, setLoading] = React.useState(true);
  const [data, setdata] = React.useState([]);

  //const UserRetrieve = () => {
  //   axios
  //     .get(`http://192.168.0.101:5000/paltroServer/v1/accountFeed/${UserId}`)
  //     .then(data => setdata(data.data))
  //     .catch(err => console.log(err));
  // };
  // React.useEffect(() => {
  //   UserRetrieve();
  // }, []);
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        backgroundColor: styles.cardBackground,
        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

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
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
            color: styles.textColor,
          }}>
          Mick John🉐🇺🇬
        </Text>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          borderRadius: 50,
          minWidth: '10%',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('ProfileSocial');
        }}>
        <View>
          <View style={{elevation: 5, marginRight: 5, borderRadius: 50}}>
            <Image
              source={
                data.profileImage == undefined || data.profileImage === ''
                  ? require('../images/user.png')
                  : {uri: data.profileImage}
              }
              style={{
                width: 40,
                height: 40,
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
          {data.name}
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
