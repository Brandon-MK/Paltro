import React, {useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../theme/themeManger';
import BottomSheet from '../../components/bottomSheet';
import Choices from '../../components/choices';

const HomePodcast = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const {styles, dark} = React.useContext(ThemeContext);
  const Banner = ({image, name, creator, category}) => {
    return (
      <ImageBackground
        source={{
          uri: image,
        }}
        style={{
          width: 220,
          height: 150,
          marginHorizontal: 5,
        }}
        borderRadius={20}>
        <View
          style={{
            padding: 15,
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View>
            <Text style={{color: 'white', fontFamily: 'Roboto-Thin'}}>
              {category}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
              }}>
              {name}
            </Text>
            <Text style={{color: 'white', fontFamily: 'Roboto-Thin'}}>
              {creator}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo
              name="controller-play"
              size={25}
              style={{marginLeft: 4}}
              onPress={() =>
                navigation.navigate('PodcastPlayer', {image, name, creator})
              }
            />
          </View>
        </View>
      </ImageBackground>
    );
  };
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
              {`${time} mins remaining`}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const ForyouView = ({image, title, episodes}) => {
    return (
      <View style={{alignItems: 'center', margin: 5}}>
        <Image
          source={{uri: image}}
          style={{width: 130, height: 130}}
          borderRadius={10}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{width: 100, textAlign: 'center', color: styles.textColor}}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'grey',
              fontFamily: 'Roboto-Thin',
            }}>{`${episodes} Episodes`}</Text>
        </View>
      </View>
    );
  };
  const data = [
    {
      id: '732',
      name: 'Hello World',
      image:
        'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Christianity',
      creator: 'Moureen',
    },
    {
      id: '4389',
      name: 'Chase the stars',
      image:
        'https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Motivation',
      creator: 'Daniel',
    },
    {
      id: '398',
      name: 'Move on!',
      image:
        'https://images.unsplash.com/photo-1509518408633-d42f618a2bdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWt1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Heart Break',
      creator: 'Kevin',
    },
  ];
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
      id: '2oiu',
      time: '25',
      episode: '1',
      title: 'Lets change the game',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const foryou = [
    {
      id: '283',
      title: 'Enter your imagination',
      episodes: '100',
      image:
        'https://images.unsplash.com/photo-1601191905893-d270babd8c87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2luYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '234',
      title: 'A world with boundaries',
      episodes: '2',
      image:
        'https://images.unsplash.com/photo-1518316847866-651fbb917956?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '542',
      title: 'B.R.E.A.K',
      episodes: '29',
      image:
        'https://images.unsplash.com/photo-1581117308254-755c73f315db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '345',
      title: 'Stories',
      episodes: '9',
      image:
        'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3Rvcmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={require('../../images/icon.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 20,
                color: styles.textColor,
              }}>
              Hey Mike
            </Text>
            <Text
              style={{
                fontFamily: 'SourceCodePro-Light',
                fontSize: 13,
                color: styles.textColor,
              }}>
              Listen to what fits you
            </Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {data.map(item => {
              return (
                <Banner
                  key={item.id}
                  category={item.category}
                  creator={item.creator}
                  image={item.image}
                  name={item.name}
                />
              );
            })}
          </View>
        </ScrollView>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 17, color: styles.textColor}}>
            Recently played
          </Text>
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
          <View style={{padding: 10, paddingLeft: 0}}>
            <Text style={{fontSize: 17, color: styles.textColor}}>For You</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}>
            {foryou.map(item => (
              <ForyouView
                episodes={item.episodes}
                key={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </View>
        </View>
        <BottomSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {backgroundColor: styles.Background},
          }}>
          <Choices Music={true} />
        </BottomSheet>
      </ScrollView>
    </View>
  );
};

export default HomePodcast;
