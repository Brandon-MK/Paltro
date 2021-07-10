import React from 'react';
import {View, Text, FlatList} from 'react-native';
import NotificationCard from '../../components/notificationCard';

const NotiSocial = () => {
  const Notifications = [
    {
      id: '1',
      profileImage:
        'https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      notification: 'Jane Woods just followed you.',
      timestamp: '15 sec',
      new: true,
    },
    {
      id: '2',
      profileImage:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      notification: 'Michelle Denver sent you a follow request.',
      timestamp: '1 minute',
      new: true,
    },
    {
      id: '3',
      profileImage:
        'https://images.unsplash.com/photo-1611608822772-43a28a830759?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      notification: 'Finesse Holland mentioned you in his story.',
      timestamp: 'Yesterday',
      new: false,
    },
    {
      id: '4',
      profileImage:
        'https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      notification: 'Kevin Waters posted a picture.',
      timestamp: 'A week',
      new: false,
    },
    {
      id: '5',
      profileImage:
        'https://images.unsplash.com/photo-1535745318714-da922ca9cc81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      notification: 'Micheal liked your picture.',
      timestamp: 'A day',
      new: false,
    },
  ];
  return (
    <View style={{padding: 10, backgroundColor: '#e5e5e5', flex: 1}}>
      <View>
        <Text style={{fontSize: 20}}>Notifications</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <View style={{marginBottom: 5}}>
          <Text style={{color: 'grey', fontSize: 15}}>New</Text>
        </View>
        <FlatList
          data={Notifications}
          renderItem={({item}) => (
            <NotificationCard
              profileImage={item.profileImage}
              notification={item.notification}
              timestamp={item.timestamp}
              new={item.new}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NotiSocial;
