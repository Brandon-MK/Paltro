import React from 'react';
import {View, Text} from 'react-native';
import Profile from '../../components/settings/Profile';
import Theme from '../../components/settings/Theme';

const SettingView = ({route}) => {
  const {type} = route.params;
  if (type === 'Profile') {
    return <Profile />;
  } else if (type === 'Theme') {
    return <Theme />;
  } else {
    return (
      <View>
        <Text>{JSON.stringify(type)}</Text>
      </View>
    );
  }
};

export default SettingView;
