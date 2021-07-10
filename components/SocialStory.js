import React from 'react';
import {View, Image, FlatList, Text} from 'react-native';

const SocialStory = () => {
  const data = [
    {
      id: '1',
      profileImage:
        'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Benjamin',
    },
    {
      id: '2',
      profileImage:
        'https://images.unsplash.com/photo-1614890094520-7b8dd0ec56d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Daniel👑',
    },
    {
      id: '3',
      profileImage:
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Charlotte🌙🉐',
    },
    {
      id: '4',
      profileImage:
        'https://images.unsplash.com/photo-1589317621382-0cbef7ffcc4c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Melissa',
    },
  ];
  const stories = ({item}) => {
    return (
      <View
        key={item.id}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 8,
        }}>
        <View
          style={{
            borderRadius: 50,
            borderColor: '#20a8fc',
            borderWidth: 2,
            borderStyle: 'dashed',
          }}>
          <Image
            source={{uri: item.profileImage}}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              margin: 1,
            }}
          />
        </View>

        <Text style={{fontSize: 12}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{marginHorizontal: 10, marginVertical: 10, width: '100%'}}>
      <FlatList
        data={data}
        renderItem={stories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SocialStory;
