import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {Input, Tabs} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextCard from '../../components/TextCard';
import {useNavigation} from '@react-navigation/native';

const SearchSocial = () => {
  const Images = [
    {
      uri: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '1',
    },
    {
      uri: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '2',
    },
    {
      uri: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      key: '3',
    },
    {
      uri: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '4',
    },
    {
      uri: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '5',
    },
    {
      uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '6',
    },
    {
      uri: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '7',
    },
    {
      uri: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      key: '2e',
    },
    {
      uri: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '3e',
    },
    {
      uri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '4r',
    },
    {
      uri: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '5t',
    },
    {
      uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '6q',
    },
    {
      uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '11',
    },
    {
      uri: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '22',
    },
    {
      uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '33',
    },
    {
      uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '44',
    },
    {
      uri: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '55',
    },
    {
      uri: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      key: '66',
    },
  ];

  const people = [
    {
      name: 'Jack Frenser',
      id: '1',
      usename: 'jackfrenser',
      profileImage:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Charlotte Denver',
      id: '2',
      usename: 'chrdenver',
      profileImage:
        'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Kevin Ballser',
      id: '3',
      usename: 'kevinballs',
      profileImage:
        'https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'John Gealer',
      id: '4',
      usename: 'Johnssss',
      profileImage:
        'https://images.unsplash.com/photo-1579880651719-3cef00eae7de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Daniel Woods',
      id: '5',
      usename: 'dainelwoods',
      profileImage:
        'https://images.unsplash.com/photo-1586822339087-80cc375ac083?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Cherry Hood',
      id: '6',
      usename: 'cherries..',
      profileImage:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const Blogs = [
    {
      id: '1',
      username: 'Ben Woods',
      name: 'Benxx',
      profileImage:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'Hello World!',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '2',
      username: 'Gelen Fisher',
      name: 'g__geke',
      profileImage:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'Cat got your tounge.',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '3',
      username: 'Samantha Gold',
      name: '.gold.',
      profileImage:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: "What's a niche?",
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '4',
      username: 'Jack Fresser',
      name: 'fresserrr',
      profileImage:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'Dab fired quicky!',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
  ];

  const navigation = useNavigation();
  const [selection, setSelection] = useState('picture');
  const [drop, setdrop] = useState(false);

  const slideAnim = useRef(new Animated.Value(-100)).current;
  const SlideIn = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const users = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          paddingVertical: 10,
        }}>
        {people.map(item => {
          return (
            <View
              key={item.id}
              style={{alignItems: 'center', paddingVertical: 5}}>
              <View style={{width: 80, paddingVertical: 10}}>
                <Image
                  source={{uri: item.profileImage}}
                  style={{width: 80, height: 80, borderRadius: 50}}
                />
                <View
                  style={{
                    marginTop: -25,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'white',
                    alignSelf: 'flex-end',
                  }}>
                  <Ionicons
                    name="add"
                    size={20}
                    style={{marginTop: -2, marginLeft: -1}}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>{item.name}</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>
                  @{item.usename}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  const photos = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 10,
          paddingBottom: 60,
        }}>
        {Images.map((item, index) => {
          return (
            <View style={{padding: 5}}>
              <Image
                source={{uri: item.uri}}
                key={item.key}
                style={{
                  width: index === 0 ? 350 : 110,
                  height: index === 0 ? 250 : 100,
                }}
              />
            </View>
          );
        })}
      </View>
    );
  };
  const blogs = () => {
    return (
      <View>
        {Blogs.map(item => {
          return (
            <View key={item.id}>
              <TextCard
                Name={item.username}
                Username={item.name}
                Timestamp={item.timestamp}
                ProfileImage={item.profileImage}
                Text={item.text}
              />
            </View>
          );
        })}
      </View>
    );
  };
  const select = () => {
    if (drop) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <TouchableOpacity onPress={() => setSelection('picture')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 5,
                backgroundColor: selection == 'picture' ? '#e5e5e5' : '#ffffff',
                padding: 10,
                paddingHorizontal: 15,
              }}>
              <Text>Pictures</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelection('people')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 5,
                backgroundColor: selection == 'people' ? '#e5e5e5' : '#ffffff',
                padding: 10,
                paddingHorizontal: 15,
              }}>
              <Text>People</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelection('blog')}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 5,
                backgroundColor: selection == 'blog' ? '#e5e5e5' : '#ffffff',
                padding: 10,
                paddingHorizontal: 15,
              }}>
              <Text>Blogs</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };
  const Views = () => {
    if (selection === 'picture') {
      return photos();
    } else if (selection === 'people') {
      return users();
    } else {
      return blogs();
    }
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 5,
          padding: 5,
        }}>
        <View
          style={{
            paddingVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              style={{marginHorizontal: 5}}
              size={28}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>Search</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Input
              variant={'filled'}
              height={50}
              placeholder={'Looking for someone...'}
              InputLeftElement={
                <Ionicons
                  name="search-outline"
                  size={25}
                  style={{marginLeft: 5}}
                />
              }
              clearButtonMode={'always'}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <TouchableOpacity
              onPress={() => {
                SlideIn();
                setdrop(!drop);
              }}>
              <Ionicons name={drop ? 'chevron-up' : 'chevron-down'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: slideAnim,
              },
            ],
          }}>
          {select()}
        </Animated.View>
      </View>
      {Views()}
    </View>
  );
};

export default SearchSocial;
