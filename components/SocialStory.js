import React from 'react';
import {View, Image, FlatList, Text, Pressable} from 'react-native';
import {ThemeContext} from '../theme/themeManger';
import {useNavigation} from '@react-navigation/native';
import LoadingImage from './loadingImage';
import LinearGradient from 'react-native-linear-gradient';

const SocialStory = () => {
  const {styles} = React.useContext(ThemeContext);
  const [Loading, setLoading] = React.useState(true);
  const navigation = useNavigation();
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
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Melissa',
    },
    {
      id: '5',
      profileImage:
        'https://images.unsplash.com/photo-1607017137021-5dc7e8cd4317?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Henry',
    },
    {
      id: '6',
      profileImage:
        'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Tevin',
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
        <Pressable onPress={() => navigation.navigate('SocialStory')}>
          <LinearGradient
            colors={['#18cc21', '#00d4ff']}
            style={{
              borderRadius: 50,
              width: 53,
              height: 53,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Image
                source={{uri: item.profileImage}}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
              {Loading ? <LoadingImage type={'user'} /> : null}
            </View>
          </LinearGradient>
        </Pressable>
        <Text style={{fontSize: 12, color: styles.textColor}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{marginTop: 10, width: '100%'}}>
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
