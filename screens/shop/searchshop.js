import React from 'react';
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import {Input} from 'native-base';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SearchShop = () => {
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  const products = [
    {
      category: 'Furniture',
      key: '1',
      products: [
        {
          name: 'Cotton Blue Chair',
          image:
            'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '500,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
        {
          name: 'Nice wooden workspace',
          image:
            'https://images.unsplash.com/photo-1616627408664-00fa6151580c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '200,000 Ugx',
          avaliablity: false,
          description: 'OLED screen, new battery and not been used.',
        },
        {
          name: 'Silk sofa',
          image:
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '500,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
      ],
    },
    {
      category: 'Fashion',
      key: '3',
      products: [
        {
          name: 'Nike new max',
          image:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '70,000 Ugx',
          avaliablity: true,
          description: 'Wool and cotton to make you feel warm',
        },
        {
          name: 'Nike Jordans A3',
          image:
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa2UlMjBzaG9lc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '20,000 Ugx',
          avaliablity: true,
          description: 'Smooth cashmire jeans.',
        },
      ],
    },
  ];
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
            <Text style={{color: styles.textColor}}>{category}</Text>
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
          {products.slice(0, 2).map((item, index) => {
            return (
              <View key={index}>
                <Pressable
                  onPress={() => navigation.navigate('ItemViewShop', {item})}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{width: 160, height: 120, borderRadius: 10}}
                  />
                  <View style={{marginHorizontal: 5}}>
                    <Text
                      style={{
                        width: 130,
                        fontSize: 16,
                        color: styles.textColor,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{color: 'grey'}}>{item.price}</Text>
                    <Text style={{color: item.avaliablity ? 'green' : 'red'}}>
                      {item.avaliablity ? 'Avaliable' : 'Not in stock'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: styles.Background, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Input
          placeholder={'Search'}
          variant={'filled'}
          style={{
            backgroundColor: styles.inputBackground,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
          }}
        />
      </View>
      <FlatList
        data={products}
        ListHeaderComponent={
          <View style={{padding: 15}}>
            <Text style={{fontSize: 20, color: styles.textColor}}>
              Recommended
            </Text>
          </View>
        }
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

export default SearchShop;
