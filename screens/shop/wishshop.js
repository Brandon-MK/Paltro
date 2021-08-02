import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';

const WishShop = () => {
  const data = [
    {
      category: 'Electronics',
      key: '1',
      products: [
        {
          name: 'Apple watch X3c',
          image:
            'https://images.unsplash.com/photo-1560863185-a4f6199b5768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          price: '300,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
        {
          name: 'Apple watch 10',
          image:
            'https://images.unsplash.com/photo-1615834569398-4cc6036929f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxld2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '200,000 Ugx',
          avaliablity: false,
          description: 'OLED screen, new battery and not been used.',
        },
        {
          name: 'Apple watch G3x',
          image:
            'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '200,000 Ugx',
          avaliablity: false,
          description: 'OLED screen, new battery and not been used.',
        },
        {
          name: 'Apple watch',
          image:
            'https://images.unsplash.com/photo-1542541864-4abf21a55761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '700,000 Ugx',
          avaliablity: true,
          description: 'Nice sound 24k crystal hearing',
        },
        {
          name: 'Apple watch New Gen',
          image:
            'https://images.unsplash.com/photo-1589410978622-a56c8715a0f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          price: '600,000 Ugx',
          avaliablity: true,
          description:
            'Newly refurbished and directly bought from the apple store.',
        },
      ],
    },
  ];
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <ScrollView>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 25, color: styles.textColor}}>Saved</Text>
        </View>
        <View>
          {data.map(items => {
            return items.products.map(item => {
              return (
                <View
                  style={{
                    margin: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ItemViewShop', {item})}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{width: 160, height: 120, borderRadius: 10}}
                    />
                    <View style={{marginLeft: 10}}>
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
                  </TouchableOpacity>
                  <View>
                    <Ionicons
                      name="ios-heart-outline"
                      size={30}
                      color={'#ffb100'}
                    />
                  </View>
                </View>
              );
            });
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default WishShop;
