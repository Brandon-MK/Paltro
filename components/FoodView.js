import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, FlatList} from 'react-native';

const FoodView = () => {
  const data = [
    {
      key: '1',
      name: 'Burgers',
      image:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2Vyc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: '2',
      name: 'Sushi',
      image:
        'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHwxfDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: '3',
      name: 'Chicken',
      image:
        'https://images.unsplash.com/photo-1613315981117-141e49472cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      key: '4',
      name: 'Pizza',
      image:
        'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwxfDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: '5',
      name: 'Steak',
      image:
        'https://images.unsplash.com/photo-1597445283613-5cee0bcfca9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lYXRzfGVufDB8MXwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 15}}>Something new</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{marginTop: 10, marginHorizontal: 5}}>
            <ImageBackground
              source={{
                uri: item.image,
              }}
              style={{width: 100, height: 140}}
              borderRadius={20}>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 15, color: 'white'}}>{item.name}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

export default FoodView;
