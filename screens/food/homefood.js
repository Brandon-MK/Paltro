import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FoodHeader from '../../components/FoodHeader';
import FoodView from '../../components/FoodView';
import FoodContent from '../../components/FoodContent';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeFood = () => {
  const data = [
    {
      title: 'Recommended',
      key: '1',
      data: [
        {
          id: '1',
          name: "Herman's Restaurant",
          image:
            'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXRzfGVufDB8MXwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          types: [
            {key: '1', name: 'Beef'},
            {key: '2', name: 'Chicken'},
          ],
          stars: '4.9',
          time: '10 - 25',
        },
        {
          id: '2',
          name: 'Liza',
          image:
            'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          types: [
            {key: '3', name: 'Pizza'},
            {key: '4', name: 'Icecream'},
          ],
          stars: '4.0',
          time: '12 - 20',
        },
      ],
    },
    {
      title: 'Beef',
      key: '2',
      data: [
        {
          id: '1',
          name: "Herman's Restaurant",
          image:
            'https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXRzfGVufDB8MXwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          types: [
            {key: '1', name: 'Beef'},
            {key: '2', name: 'Chicken'},
          ],
          stars: '4.9',
          time: '10 - 25',
        },
        {
          id: '2',
          name: 'Liza',
          image:
            'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          types: [
            {key: '3', name: 'Pizza'},
            {key: '4', name: 'Icecream'},
          ],
          stars: '4.0',
          time: '12 - 20',
        },
      ],
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <FoodHeader />
      <ScrollView>
        <FoodView />
        {data.map((item, index) => (
          <View>
            <View style={{paddingTop: 10, paddingLeft: 10}} key={index}>
              <Text style={{fontSize: 15}}>{item.title}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.data.map(items => (
                <View key={items.id}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('FoodView')}>
                    <FoodContent
                      name={items.name}
                      image={items.image}
                      time={items.time}
                      stars={items.stars}
                      types={items.types}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeFood;
