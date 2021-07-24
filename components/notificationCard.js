import React from 'react';
import {View, Image, Text} from 'react-native';
import {ThemeProvider, ThemeContext} from '../theme/themeManger';

const NotificationCard = props => {
  const {styles} = React.useContext(ThemeContext);
  const BadgeView = () => {
    if (props.new) {
      return (
        <View style={{position: 'absolute', right: 5, top: 10}}>
          <View
            style={{
              backgroundColor: '#20a8fc',
              width: 15,
              height: 15,
              borderRadius: 15,
            }}
          />
        </View>
      );
    } else {
      return null;
    }
  };
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: styles.cardBackground,
          //elevation: 5,
          borderRadius: 40,
          width: '100%',
          padding: 10,
          marginVertical: 7,
        }}>
        <Image
          source={{
            uri: props.profileImage,
          }}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
        <View style={{width: '80%', marginHorizontal: 10}}>
          <Text style={{color: styles.textColor}}>{props.notification}</Text>
          <Text style={{color: 'grey', fontSize: 12}}>{props.timestamp}</Text>
        </View>
      </View>
      {BadgeView()}
    </View>
  );
};

export default NotificationCard;
