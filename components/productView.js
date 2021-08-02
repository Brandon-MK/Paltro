import React from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeProvider, ThemeContext} from '../MainContext/MainContext';
import Feather from 'react-native-vector-icons/Feather';

const ProductView = ({
  image,
  views,
  buys,
  saves,
  title,
  cost,
  avaliability,
}) => {
  const {styles} = React.useContext(ThemeContext);
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={{width: 120, height: 120}}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: styles.textColor,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text style={{color: 'grey', fontSize: 15, marginLeft: 5}}>
            {cost}
          </Text>
        </View>
        <View>
          <Text style={{color: 'green'}}>{avaliability}</Text>
        </View>
        <View style={{margin: 1, flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '25%',
            }}>
            <Feather name="eye" size={20} color={'grey'} />
            <Text style={{color: styles.textColor, marginLeft: 3}}>
              {views}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '25%',
            }}>
            <Feather name="bookmark" size={20} color={'grey'} />
            <Text style={{color: styles.textColor, marginLeft: 3}}>
              {saves}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '25%',
            }}>
            <Feather name="credit-card" size={20} color={'grey'} />
            <Text style={{color: styles.textColor, marginLeft: 3}}>{buys}</Text>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '56%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 70,
              height: 40,
              backgroundColor: '#444444',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather
              name="edit"
              color={styles.textColor}
              size={20}
              style={{marginRight: 6}}
            />
            <Text style={{color: styles.textColor}}>Edit</Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#444444',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather name="trash" color={'red'} size={17} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductView;
