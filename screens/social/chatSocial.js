import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Input} from 'native-base';
import ChatView from '../../components/ChatView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';

const ChatSocial = () => {
  const data = [
    {
      id: '1',
      profileImage:
        'https://images.unsplash.com/photo-1587131475399-7151a7ee2230?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      count: 7,
      name: 'Johnny',
      timeStamp: '2:20 am',
      message: 'Hey, can you take a picture of me.',
    },
    {
      id: '2',
      profileImage:
        'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      count: 2,
      name: 'Kevin',
      timeStamp: '5:10 pm',
      message: 'Wana get lunch tommorow?',
    },
    {
      id: '3',
      profileImage:
        'https://images.unsplash.com/photo-1511945863317-d60e146e9016?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      count: 5,
      name: 'Charlotte',
      timeStamp: '1:00 am',
      message: 'Check out my new post.',
    },
    {
      id: '4',
      profileImage:
        'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      count: 1,
      name: 'Danny',
      timeStamp: '4:02 pm',
      message: '😆😆😆😆😆😆😆😆',
    },
  ];
  const {styles} = React.useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View style={{padding: 10}}>
        <Text
          style={{fontSize: 20, marginVertical: 10, color: styles.textColor}}>
          Messages
        </Text>
        <Input
          placeholder={'Search'}
          variant={'filled'}
          InputLeftElement={
            <Ionicons name="search" size={20} style={{marginLeft: 10}} />
          }
          backgroundColor={styles.inputBackground}
        />
      </View>
      <View>
        <FlatList
          data={data}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '95%',
                borderColor: styles.profileCard,
                borderBottomWidth: 1,
                alignSelf: 'center',
              }}
            />
          )}
          renderItem={({item}) => (
            <ChatView
              profileImage={item.profileImage}
              name={item.name}
              count={item.count}
              timeStamp={item.timeStamp}
              message={item.message}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChatSocial;
