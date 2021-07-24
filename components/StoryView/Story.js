// @flow
import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Avatar from './Avatar';

export default class extends React.PureComponent {
  state = {loading: true};
  width = Dimensions.get('window').width;
  render() {
    const {
      story: {source, user, avatar},
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={{uri: source}}
              onLoadStart={() => this.setState({loading: true})}
              onLoadEnd={() => this.setState({loading: false})}
            />
            {this.state.loading == true ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'black',
                }}>
                <ActivityIndicator color={'white'} size={'large'} />
              </View>
            ) : null}
          </View>
          <View
            style={{
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#eaeaea',
                width: '95%',
                height: 5,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <Avatar {...{user, avatar}} />
        </View>
        <View style={styles.footer}>
          <Feather name="camera" color="white" size={28} />
          <TextInput style={styles.input} />
          <Feather name="message-circle" color="white" size={28} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    height: 28,
    width: 250,
    borderRadius: 10,
  },
});
