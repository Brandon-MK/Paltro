import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Feather from 'react-native-vector-icons/Feather';
import OrderList from '../../components/OrderList';

const IncomingOrders = () => {
  const {styles} = React.useContext(ThemeContext);
  const Orders = [
    // {
    //   customer: 'Caroline Jane',
    //   cost: '50,000 UGX',
    //   Date: 'Mon 5th June 2021',
    //   image:
    //     'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    // },
    // {
    //   customer: 'Kalinaki Lelia',
    //   cost: '1,00,000 UGX',
    //   Date: 'Wed 12th November 2020',
    //   image:
    //     'https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    // },
  ];
  const {height} = Dimensions.get('window');
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      {Orders.length === 0 ? null : (
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, color: styles.textColor}}>Orders</Text>
        </View>
      )}

      <FlatList
        data={Orders}
        keyExtractor={(item, index) => `${item.customer}-${index}`}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: height,
            }}>
            <Text style={{fontSize: 20, color: 'grey', marginBottom: 5}}>
              No customers yet
            </Text>
            <Feather name="frown" size={40} color={'grey'} />
          </View>
        }
        renderItem={({item, index}) => (
          <OrderList
            image={item.image}
            cost={item.cost}
            customer={item.customer}
            date={item.Date}
          />
        )}
      />
    </View>
  );
};

export default IncomingOrders;
