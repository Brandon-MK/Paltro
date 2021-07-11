import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatView = props => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('MessageSocial', {
          name: props.name,
          profileImage: props.profileImage,
        })
      }>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          width: '100%',
          marginVertical: 10,
        }}>
        <View>
          <Image
            source={{
              uri: props.profileImage,
            }}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </View>
        <View style={{marginLeft: 10, width: '80%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 15}}>{props.name}</Text>
            </View>
            <View>
              <Text>{props.timeStamp}</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'grey'}}>{props.message}</Text>
            <View
              style={{
                minWidth: 23,
                height: 23,
                backgroundColor: '#00FF00',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <Text style={{paddingHorizontal: 2, color: 'white'}}>
                {props.count}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatView;
