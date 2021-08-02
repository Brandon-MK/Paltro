import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl, Text} from 'react-native';
import {GetSocialFeed} from '../Api/SocialApi';
import ImageCard from './ImageCard';
import TextCard from './TextCard';
import SocialStory from './SocialStory';
import SocialBlog from './SocialBlog';

const SocialCard = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const FeedRetriever = async () => {
    await GetSocialFeed()
      .then(res => setData(res))
      .catch(err => console.log(err));
  };
  const onRefresh = async () => {
    setRefreshing(true);
    await FeedRetriever().then(() => setRefreshing(false));
  };
  useEffect(() => FeedRetriever(), []);
  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl
          colors={['#00A4FD', '#00C5FD']}
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#222222'}
        />
      }
      ListHeaderComponent={
        <View>
          <SocialStory />
          <SocialBlog />
        </View>
      }
      listEmptyComponent={<Text>Rendering Data...</Text>}
      renderItem={({item}) => {
        if (item.Type === 'ImagePosts') {
          return (
            <View key={item.PostId}>
              <ImageCard
                Name={item.Name}
                Username={item.Username}
                Timestamp={new Date('July 06, 2021 05:00:00')}
                Source={item.Images}
                ProfileImage={item.ProfileImage}
                Text={item.Text}
                Comments={[]}
              />
            </View>
          );
        } else if (item.Type === 'TextPosts') {
          return (
            <View key={item.PostId}>
              <TextCard
                Name={item.Name}
                Username={item.Username}
                Timestamp={new Date('July 06, 2021 05:00:00')}
                ProfileImage={item.ProfileImage}
                Text={item.Text}
                Comments={[]}
              />
            </View>
          );
        }
      }}
      keyExtractor={(item, index) => item.PostId + index}
    />
  );
};

export default SocialCard;
