import React from 'react';
import {StatusBar, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Stories, Stories2} from '../../components/StoryView/index';

const stories = [
  {
    id: '2',
    source:
      'https://images.unsplash.com/photo-1600058644231-c99658f408ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'derek.russel',
    avatar:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    source:
      'https://images.unsplash.com/photo-1531844734254-51193b49c604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'jmitch',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '5',
    source:
      'https://images.unsplash.com/photo-1574362952058-fc33b7076d6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'monicaa',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    source:
      'https://images.unsplash.com/photo-1552611052-33e04de081de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'alexandergarcia',
    avatar:
      'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '1',
    source:
      'https://images.unsplash.com/photo-1619601632963-b45b75a26584?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    user: 'andrea.schmidt',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

export default class StoryView extends React.Component {
  state = {
    ready: false,
  };

  render() {
    const {ready} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <Stories2 {...{stories}} />
      </View>
    );
  }
}
