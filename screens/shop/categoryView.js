import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryView = ({route}) => {
  const navigation = useNavigation();
  const {category, products} = route.params;
  return (
    <View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 5,
          backgroundColor: 'white',
          marginBottom: 10,
        }}>
        <Ionicons
          name="chevron-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25}}>
          {JSON.stringify(category).slice(1, category.length + 1)}
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          {products.map(item => {
            return (
              <View style={{margin: 5}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ItemViewShop', {item})}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{width: 160, height: 120, borderRadius: 10}}
                  />
                  <View style={{margin: 5}}>
                    <Text style={{width: 130, fontSize: 16}}>{item.name}</Text>
                    <Text style={{color: 'grey'}}>{item.price}</Text>
                    <Text style={{color: item.avaliablity ? 'green' : 'red'}}>
                      {item.avaliablity ? 'Avaliable' : 'Not in stock'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryView;
