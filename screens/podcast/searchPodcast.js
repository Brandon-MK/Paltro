import React from 'react';
import {View, Text} from 'react-native';
import {Input} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

const SearchPodcast = () => {
  return (
    <View>
      <View style={{padding: 10, elevation: 5, backgroundColor: 'white'}}>
        <Input
          placeholder={'Looking for something'}
          InputLeftElement={
            <Feather
              name="search"
              size={18}
              style={{marginLeft: 5, marginRight: -5}}
            />
          }
          variant={'filled'}
        />
      </View>
    </View>
  );
};

export default SearchPodcast;
