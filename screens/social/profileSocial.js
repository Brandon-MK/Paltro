import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Tab, TabView} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextCard from '../../components/TextCard';

const ProfileSocial = () => {
  const profileImage =
    'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80';
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
  const Blogs = [
    {
      id: '1',
      username: 'johnmick',
      name: 'Mick John',
      profileImage: profileImage,
      text: 'Hello World!',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '2',
      username: 'johnmick',
      name: 'Mick John',
      profileImage: profileImage,
      text: 'Cat got your tounge.',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '3',
      username: 'johnmick',
      name: 'Mick John',
      profileImage: profileImage,
      text: "What's a niche?",
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
    {
      id: '4',
      username: 'johnmick',
      name: 'Mick John',
      profileImage: profileImage,
      text: 'Dab fired quicky!',
      timestamp: new Date('July 06, 2021 03:24:00'),
    },
  ];
  const [Tab, setTab] = useState(0);
  const navigation = useNavigation();
  const TabView = () => {
    if (Tab === 0) {
      return (
        <View>
          {Blogs.map(item => (
            <View key={item.id}>
              <TextCard
                Name={item.name}
                Username={item.username}
                Timestamp={item.timestamp}
                ProfileImage={item.profileImage}
                Text={item.text}
                customStyles={{
                  width: '95%',
                  marginVertical: 2,
                  elevation: 1,
                  borderRadius: 0,
                }}
              />
            </View>
          ))}
        </View>
      );
    } else if (Tab === 1) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {Images.map(item => {
              return (
                <Image
                  source={{uri: item.uri}}
                  key={item.key}
                  style={{
                    height: 150,
                    width: 100,
                    borderRadius: 5,
                    marginVertical: 5,
                  }}
                />
              );
            })}
          </View>
        </View>
      );
    } else if (Tab === 2) {
      return (
        <View>
          <Text>Tags</Text>
        </View>
      );
    } else if (Tab === 3) {
      return (
        <View>
          <Text>Mentions</Text>
        </View>
      );
    }
  };
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            elevation: 2,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={30} />
          </TouchableOpacity>

          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Mick John
          </Text>
          <Ionicons name="settings-outline" size={30} />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: profileImage,
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View
            style={{
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20}}>@johnmick</Text>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 5,
              }}>{`Hello👋,\nPhotographer at heart, 💕\nPictures by passion📷`}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 50,
          }}>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              12K
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Followers
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              50
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Posts
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              10
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Following
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 5,
              borderColor: '#e5e5e5',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                borderColor: '#20a8fc',
                borderBottomWidth: Tab === 0 ? 2 : 0,
              }}>
              <TouchableOpacity onPress={() => setTab(0)}>
                <Text style={{color: Tab === 0 ? 'black' : 'grey', padding: 5}}>
                  Blogs
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderColor: '#20a8fc',
                borderBottomWidth: Tab === 1 ? 2 : 0,
              }}>
              <TouchableOpacity onPress={() => setTab(1)}>
                <Text style={{color: Tab === 1 ? 'black' : 'grey', padding: 5}}>
                  Images
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderColor: '#20a8fc',
                borderBottomWidth: Tab === 2 ? 2 : 0,
              }}>
              <TouchableOpacity onPress={() => setTab(2)}>
                <Text style={{color: Tab === 2 ? 'black' : 'grey', padding: 5}}>
                  Tags
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderColor: '#20a8fc',
                borderBottomWidth: Tab === 3 ? 2 : 0,
              }}>
              <TouchableOpacity onPress={() => setTab(3)}>
                <Text style={{color: Tab === 3 ? 'black' : 'grey', padding: 5}}>
                  Mentions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <TabView />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileSocial;
