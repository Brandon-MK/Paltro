import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';

const ItemViewShop = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const products = [
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
  const {styles, dark} = React.useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <ScrollView>
        <View>
          <Image
            source={{uri: item.Image}}
            style={{width: '100%', height: 200}}
          />
          <View
            style={{
              position: 'absolute',
              padding: 5,
              backgroundColor: styles.Background,
              borderRadius: 10,
              margin: 10,
            }}>
            <Ionicons
              name={'chevron-back'}
              size={25}
              color={styles.textColor}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, color: styles.textColor}}>
              {item.Name}
            </Text>
            <View>
              <Ionicons
                name="cart-outline"
                size={30}
                color={styles.textColor}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: 'grey'}}>{item.Description}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{color: styles.textColor}}>Charles Benjamin</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="star" size={15} color={'#ffb100'} />
                  <Text style={{marginLeft: 5, color: 'grey'}}>4.9</Text>
                </View>
              </View>
            </View>
            <View>
              <Ionicons
                name="chevron-forward"
                style={{alignSelf: 'flex-end'}}
                size={25}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{fontSize: 19, color: styles.textColor}}>Price</Text>
          <Text style={{fontSize: 18, color: 'grey'}}>{item.Price}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{fontSize: 19, color: styles.textColor}}>
            Availability
          </Text>
          <Text style={{fontSize: 18, color: item.Avaliable ? 'green' : 'red'}}>
            {item.Avaliable ? '• Avaliable' : '• Not in stock'}
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, color: 'grey'}}>More like this</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            {products.map(items => {
              return items.products.map(item => {
                return (
                  <View style={{margin: 5}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ItemViewShop', {item})
                      }>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{width: 160, height: 120, borderRadius: 10}}
                      />
                      <View style={{margin: 5}}>
                        <Text
                          style={{
                            width: 130,
                            fontSize: 16,
                            color: styles.textColor,
                          }}>
                          {item.name}
                        </Text>
                        <Text style={{color: 'grey'}}>{item.price}</Text>
                        <Text
                          style={{color: item.avaliablity ? 'green' : 'red'}}>
                          {item.avaliablity ? 'Avaliable' : 'Not in stock'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              });
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemViewShop;
