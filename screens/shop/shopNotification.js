import React from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';

const ShopNotification = () => {
  const {styles, dark} = React.useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: styles.textColor}}>
          Notifications
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: styles.textColor, fontFamily: 'Roboto-Medium'}}>
            Mick's Hoodies
          </Text>
          <Text style={{color: styles.textColor}}>New hoodie @ 25000 UGX</Text>
          <Text style={{color: 'grey'}}>3:12 pm</Text>
        </View>
      </View>
    </View>
  );
};

export default ShopNotification;
