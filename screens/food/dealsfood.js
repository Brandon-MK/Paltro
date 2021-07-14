import React from 'react';
import {View, Text} from 'react-native';
import FoodListView from '../../components/FoodListView';

const DealsFood = () => {
  const deals = [
    {
      resturant: "Henzi's",
      title: 'Beef',
      data: [
        {
          key: '1',
          variants: [],
          name: 'Beef Steak',
          price: '25000 UGX',
          discountPrice: '10000 UGX',
          image:
            'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      resturant: 'Mapple Chicken',
      title: 'Chicken',
      data: [
        {
          key: '2',
          variants: [],
          name: 'Chicken Wings',
          price: '25000 UGX',
          discountPrice: '10000 UGX',
          image:
            'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20}}>Today's Deals</Text>
      </View>
      <View>
        {deals.map(item => {
          return item.data.map((i, index) => (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                marginVertical: 10,
                marginHorizontal: 5,
                padding: 5,
              }}
              key={index}>
              <FoodListView
                restaurant={item.resturant}
                discount={true}
                discountprice={i.discountPrice}
                name={i.name}
                variants={i.variants}
                price={i.price}
                image={i.image}
              />
            </View>
          ));
        })}
      </View>
    </View>
  );
};

export default DealsFood;
