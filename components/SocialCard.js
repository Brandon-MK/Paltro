import React from 'react';
import {FlatList, View} from 'react-native';
import data from '../data';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const SocialCard = () => {
  const onViewed = dat => {
    const datamemory = [];
    dat[0].item.map(item => {
      if (!datamemory.includes(item.key)) {
        datamemory.push([dat[0].item, ...datamemory]);
        console.log(datamemory);
      }
    });
  };
  return (
    <FlatList
      data={data}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
      }}
      onViewableItemsChanged={onViewed}
      renderItem={({item}) => {
        return item.posts.map(vals => {
          if (vals.type === 'Image') {
            return (
              <View key={vals.key}>
                <ImageCard
                  Name={item.name}
                  Username={item.username}
                  Timestamp={vals.timestamp}
                  Source={vals.source}
                  ProfileImage={item.profileImage}
                  Text={vals.text}
                  Comments={vals.comments}
                />
              </View>
            );
          } else if (vals.type === 'Text') {
            return (
              <View key={vals.key}>
                <TextCard
                  Name={item.name}
                  Username={item.username}
                  Timestamp={vals.timestamp}
                  ProfileImage={item.profileImage}
                  Text={vals.text}
                />
              </View>
            );
          }
        });
      }}
      key={item => {
        item.posts.map(item => item.key);
      }}
    />
  );
};

export default SocialCard;
