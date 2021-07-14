import React from 'react';
import {View, Text, Button} from 'react-native';
import FoodListView from '../../components/FoodListView';

const CartFood = () => {
  const data = [
    {
      resturant: "Henzi's",
      title: 'Beef',
      data: [
        {
          key: '1',
          variants: [],
          name: 'Beef Steak',
          price: '25000 UGX',
          image:
            'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      resturant: 'Rome',
      title: 'Pizza',
      data: [
        {
          key: '4',
          variants: [
            {key: '1', size: 'large'},
            {key: '2', size: 'small'},
            {key: '3', size: 'medium'},
          ],
          name: 'Hawiian Pizza',
          price: '25000 UGX',
          image:
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#eae5e5'}}>
      <View style={{padding: 10, backgroundColor: '#eae5e5'}}>
        <Text style={{fontSize: 24}}>Cart</Text>
        <Text style={{padding: 2, fontSize: 17}}>Your order</Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{marginTop: 10}}>
          {data.map(item => {
            return item.data.map((i, index) => (
              <FoodListView
                restaurant={item.resturant}
                key={index}
                name={i.name}
                variants={i.variants}
                price={i.price}
                image={i.image}
              />
            ));
          })}
        </View>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 15}}>Total</Text>
            <Text style={{fontSize: 15, color: 'grey'}}>20,000UGX</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15}}>Delivering to</Text>
            <Text style={{fontSize: 15, color: 'grey'}}>Kampala, Uganda</Text>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Button title={'Checkout'} color={'#ffb100'} />
        </View>
      </View>
    </View>
  );
};

export default CartFood;
