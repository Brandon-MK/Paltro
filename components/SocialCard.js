import React from 'react';
import {FlatList, View} from 'react-native';
import data from '../data';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const SocialCard = () => {
  return (
    <FlatList
      data={data}
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
                  Comments={vals.comments}
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
