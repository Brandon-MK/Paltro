import React, {useRef, useState} from 'react';
import {View, Text, Animated, Dimensions, FlatList} from 'react-native';
import StoryView from './storyView';

const Stories = () => {
  const data = [
    {
      name: 'Henry Mick',
      username: '@mickjohn',
      avatar:
        'https://images.unsplash.com/photo-1604342162684-0cb7869cc445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2luYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stories: [
        {
          type: 'Image',
          image:
            'https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2luYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          type: 'Image',
          image:
            'https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2luYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      name: 'Brandon Woods',
      username: '@woodsbrandon',
      avatar:
        'https://images.unsplash.com/photo-1584635240092-d87d74854f68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdpbmF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stories: [
        {
          type: 'Image',
          image:
            'https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGltYWdpbmF0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
        {
          type: 'Image',
          image:
            'https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2luYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
  const {width, height} = Dimensions.get('window');
  const scrolling = useRef(new Animated.Value(0)).current;

  //   const [visibleIndex, setvisibleIndex] = useState(0);
  //   const onViewableItemsChanged = ({viewableItems, changed}) => {
  //     setvisibleIndex(viewableItems[0].index);
  //     // console.log('Changed in this iteration', changed);
  //   };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Animated.FlatList
        data={data}
        keyExtractor={(i, index) => index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <StoryView
            avatar={item.avatar}
            data={item.stories}
            key={index}
            username={item.username}
            animation={scrolling}
            index={index}
            name={item.name}
          />
        )}
      />
    </View>
  );
};

export default Stories;
