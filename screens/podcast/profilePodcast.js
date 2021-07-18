import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {Button, Input} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfilePodcast = () => {
  const data = [
    {
      id: '3yeds',
      time: '12',
      episode: '21',
      title: 'Breaking The Limits',
      image:
        'https://images.unsplash.com/photo-1503516459261-40c66117780a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2oiu',
      time: '25',
      episode: '1',
      title: 'Lets change the game',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2iu',
      time: '12',
      episode: '21',
      title: 'Breaking The Limits',
      image:
        'https://images.unsplash.com/photo-1503516459261-40c66117780a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'uos12',
      time: '25',
      episode: '1',
      title: 'Lets change the game',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const Played = ({image, time, episode, title}) => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Image
            source={{
              uri: image,
            }}
            style={{width: 70, height: 70, borderRadius: 10}}
          />
          <View style={{marginLeft: 10}}>
            <View style={{maxWidth: 200}}>
              <Text style={{fontSize: 15}}>
                {`${title} • Episode ${episode}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 5,
                  fontFamily: 'Roboto-Thin',
                }}>
                {`${time} mins • Jun 12, 2021`}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
          }}>
          <Entypo name="controller-play" size={30} style={{marginLeft: 3}} />
        </View>
      </View>
    );
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1572930621326-f5297aeccc6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0b3JpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: '100%', height: 200}}>
          <View
            style={{
              position: 'absolute',
              bottom: -50,
              alignSelf: 'center',
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1547037808-115dcc98430c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0b3JpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}
              style={{width: 100, height: 100, borderRadius: 20}}
            />
          </View>
        </ImageBackground>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
              textAlign: 'center',
            }}>
            Motivation for you
          </Text>
          <Text style={{textAlign: 'center', marginTop: 5}}>Kevin Woods</Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              width: 300,
              color: 'grey',
            }}>
            Sit anim in nostrud veniam in consectetur ut consequat aliqua
            consequat. Tempor laboris aliqua ullamco sit esse in ipsum in ad
            commodo ullamco. In ipsum laboris exercitation adipisicing tempor
            elit aliquip qui nulla.
          </Text>
          <Text style={{textAlign: 'center', marginTop: 5}}>
            1.5M Listeners • 345 Episodes
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingTop: 15,
          }}>
          <Feather name="bookmark" size={20} />
          <Button style={{borderRadius: 40, width: 100}}>
            <Text style={{color: 'white'}}>Settings</Text>
          </Button>
          <Feather name="upload" size={20} />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text>Episodes</Text>

            <Input
              placeholder={'Search for an episode'}
              variant={'underlined'}
            />
          </View>
          <View style={{padding: 10}}>
            {data.map(item => {
              return (
                <Played
                  episode={item.episode}
                  image={item.image}
                  key={item.id}
                  time={item.time}
                  title={item.title}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePodcast;
