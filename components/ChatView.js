import React from 'react';
import {View, Text, Image} from 'react-native';

const ChatView = props => {
  return (
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
            <Text style={{paddingHorizontal: 2}}>{props.count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatView;
