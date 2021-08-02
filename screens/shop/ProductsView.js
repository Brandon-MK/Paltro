import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {style} from 'styled-system';
import ProductView from '../../components/productView';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';

export default function ProductsView() {
  const {styles} = React.useContext(ThemeContext);
  const {height} = Dimensions.get('window');
  const Products = [];
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      {Products.length == 0 ? null : (
        <View style={{padding: 20}}>
          <Text style={{color: styles.textColor, fontSize: 20}}>
            Your Products
          </Text>
        </View>
      )}

      <FlatList
        data={Products}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: height,
            }}>
            <Text style={{fontSize: 20, color: 'grey', marginBottom: 5}}>
              You haven't uploaded anything
            </Text>
            <Feather name="frown" size={40} color={'grey'} />
          </View>
        }
        renderItem={({item, index}) => (
          <ProductView
            image={item.image}
            buys={item.buys}
            avaliability={item.avaliablity}
            cost={item.cost}
            saves={item.saves}
            title={item.title}
            views={item.views}
            key={index}
          />
        )}
      />
    </View>
  );
}
