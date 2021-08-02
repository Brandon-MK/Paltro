import React from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../MainContext/MainContext';
import Feather from 'react-native-vector-icons/Feather';

const OrderList = ({image, customer, cost, date}) => {
  const {styles} = React.useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: 70, height: 70}}
        />
        <View style={{margin: 5}}>
          <Text style={{color: styles.textColor}}>{customer}</Text>
          <Text style={{color: 'green'}}>{cost}</Text>
          <Text style={{color: 'grey'}}>{date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Feather
          name="message-circle"
          color={styles.textColor}
          size={25}
          style={{marginHorizontal: 10}}
        />
        <Feather
          name="user-check"
          color={styles.textColor}
          size={25}
          style={{marginHorizontal: 10}}
        />
      </View>
    </View>
  );
};

export default OrderList;
