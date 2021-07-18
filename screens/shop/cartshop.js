import React from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartShop = () => {
  const data = [
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
  return (
    <View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 25}}>My Cart</Text>
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
                    <Text style={{width: 130, fontSize: 16}}>{item.name}</Text>
                    <Text style={{color: 'grey'}}>{item.price}</Text>
                    <Text style={{color: item.avaliablity ? 'green' : 'red'}}>
                      {item.avaliablity ? 'Avaliable' : 'Not in stock'}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            backgroundColor: '#e5e5e5',
                            borderRadius: 50,
                            width: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              padding: 1,
                            }}>
                            +
                          </Text>
                        </View>

                        <Text>1</Text>
                        <View
                          style={{
                            backgroundColor: '#e5e5e5',
                            borderRadius: 50,
                            width: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              padding: 1,
                            }}>
                            -
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#e5e5e5',
                          borderRadius: 50,
                          width: 30,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Ionicons name="trash-outline" size={20} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          });
        })}
      </View>
      <View
        style={{padding: 10, backgroundColor: '#e5e5e5', marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 15}}>Delivery Location</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>Kampala, Uganda</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 15}}>Payment Method</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>Cash on Delivery</Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 18}}>Total</Text>
          <Text style={{fontSize: 18, color: 'grey'}}>60,000 Ugx</Text>
        </View>
      </View>
      <View style={{padding: 10, marginTop: -20}}>
        <Button title="Checkout" />
      </View>
    </View>
  );
};

export default CartShop;
