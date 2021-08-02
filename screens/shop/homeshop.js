import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import ShopHeader from '../../components/ShopHeader';
import {useNavigation} from '@react-navigation/native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import {GetShopFeed} from '../../Api/shopApi';
import LottieView from 'lottie-react-native';

const HomeShop = () => {
  const [products, setProducts] = useState([]);
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  const shopFeed = async () => {
    await GetShopFeed()
      .then(res => setProducts(res))
      .catch(err => console.error(err));
  };
  useEffect(() => {
    return shopFeed();
  }, []);
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
                      uri: item.Image,
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
                      {item.Name}
                    </Text>
                    <Text style={{color: 'grey'}}>{item.Price}</Text>
                    <Text style={{color: item.Avaliable ? 'green' : 'red'}}>
                      {item.Avaliable ? 'Avaliable' : 'Not in stock'}
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
      <ShopHeader />
      <FlatList
        data={products}
        ListEmptyComponent={
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <LottieView
              source={require('../../assets/lf30_editor_ad1iqvum.json')}
              autoPlay
              loop
              style={{width: 150, height: 150}}
            />
          </View>
        }
        keyExtractor={(item, index) => `${item.Category}-${index}`}
        renderItem={({item, index}) => {
          return (
            <ViewItem
              category={item.Category}
              number={item.data.length}
              products={item.data}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeShop;
