import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import ShopHeader from '../../components/ShopHeader';
import {useNavigation} from '@react-navigation/native';

const HomeShop = () => {
  const products = [
    {
      category: 'Electronics',
      key: '1',
      products: [
        {
          name: 'Mega studio headphones',
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '20,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
        {
          name: 'Apple watch G3x',
          image:
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
          price: '200,000 Ugx',
          avaliablity: false,
          description: 'OLED screen, new battery and not been used.',
        },
        {
          name: 'Air pods',
          image:
            'https://images.unsplash.com/photo-1603680373177-e762186bdc3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlyJTIwcG9kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '50,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
        {
          name: 'Mac book air',
          image:
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '2,000,000 Ugx',
          avaliablity: false,
          description:
            'Newly refurbished and directly bought from the apple store.',
        },
      ],
    },
    {
      category: 'Fashion',
      key: '3',
      products: [
        {
          name: "Girl's Jumper",
          image:
            'https://images.unsplash.com/photo-1601396344868-31e008cd6e7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN3ZWF0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '40,000 Ugx',
          avaliablity: true,
          description: 'Wool and cotton to make you feel warm',
        },
        {
          name: 'Jeans',
          image:
            'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '20,000 Ugx',
          avaliablity: true,
          description: 'Smooth cashmire jeans.',
        },
      ],
    },
  ];
  const navigation = useNavigation();
  const ViewItem = ({category, number, products}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{category}</Text>
            <Text style={{color: 'grey'}}> {number}</Text>
          </View>
          <Text
            style={{color: 'deepskyblue'}}
            onPress={() =>
              navigation.navigate('CategoryView', {category, products})
            }>
            View all
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {products.slice(0, 2).map(item => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ItemViewShop', {item})}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{width: 160, height: 120, borderRadius: 10}}
                  />
                  <View style={{marginHorizontal: 5}}>
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
      </View>
    );
  };
  return (
    <View>
      <ShopHeader />
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <ViewItem
              category={item.category}
              number={item.products.length}
              products={item.products}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeShop;
