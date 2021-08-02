import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {ThemeContext} from '../../MainContext/MainContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActivityPodcast = () => {
  const {styles, dark} = React.useContext(ThemeContext);
  const recent = [
    {
      id: '3yeds',
      time: '12',
      episode: '21',
      title: 'Breaking The Limits',
      image:
        'https://images.unsplash.com/photo-1503516459261-40c66117780a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 'ho0iu',
      time: '15',
      episode: '8',
      title: 'Imagination',
      image:
        'https://images.unsplash.com/photo-1608568746007-00498a568153?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2luYXRpb258ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2oiu',
      time: '25',
      episode: '1',
      title: 'Lets change the game',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const following = [
    {
      id: 21,
      name: 'Jack Brandon',
      image:
        'https://images.unsplash.com/photo-1619735007512-34004ec2f348?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2luYXRpb258ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 11,
      name: 'Kevin Woods',
      image:
        'https://images.unsplash.com/photo-1508666709797-f0bb3d96324d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdpbmF0aW9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const Played = ({image, time, episode, title}) => {
    return (
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
        <View style={{marginHorizontal: 20}}>
          <View style={{maxWidth: 200}}>
            <Text style={{fontSize: 15, color: styles.textColor}}>
              {`${title} • Episode ${episode}`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <AntDesign
              name="clockcircleo"
              color={dark ? 'white' : 'grey'}
              size={16}
            />
            <Text
              style={{
                color: 'grey',
                marginLeft: 5,
                fontFamily: 'Roboto-Thin',
              }}>
              {`${time} mins`}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, color: styles.textColor}}>Activity</Text>
        <Ionicons name="person-outline" color={styles.textColor} size={25} />
      </View>
      <ScrollView>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: 'grey'}}>Likes</Text>
            <Text style={{fontSize: 15, color: '#00b1f7'}}>View all</Text>
          </View>
          {recent.map(item => {
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
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: 'grey'}}>Following</Text>
            {following.length <= 5 ? null : (
              <Text style={{fontSize: 15, color: '#00b1f7'}}>View all</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            {following.map(item => {
              return (
                <View style={{margin: 10, alignItems: 'center'}}>
                  <View>
                    <Image
                      source={{uri: item.image}}
                      style={{width: 60, height: 60, borderRadius: 60}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        width: 70,
                        textAlign: 'center',
                        color: styles.textColor,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityPodcast;
