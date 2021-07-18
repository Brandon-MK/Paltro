// @flow
import * as React from 'react';
import {StyleSheet, View, Image, Text, Platform} from 'react-native';
// import { Constants } from 'expo-constants';

export default class Avatar extends React.PureComponent {
  render() {
    const {user, avatar: source} = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: source}} style={styles.avatar} />
        <Text style={styles.username}>{user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginTop: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  username: {
    color: 'white',
    fontSize: 16,
  },
});
