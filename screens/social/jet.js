import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Enytpo from 'react-native-vector-icons/Entypo';
import {ThemeProvider, ThemeContext} from '../../theme/themeManger';

const JetScreen = () => {
  const {styles, dark} = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [jetLength, setjetLength] = useState(0);
  const Max = 500;
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Enytpo
          name="chevron-left"
          size={25}
          color={styles.textColor}
          style={{marginRight: 5}}
        />
        <Text style={{fontSize: 20, color: styles.textColor}}>
          What are your thoughts?
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../images/user.png')}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: styles.textColor}}>Mike John</Text>
            <Text style={{fontSize: 12, color: 'grey'}}>@mikejohn</Text>
          </View>
        </View>
        <View
          style={{
            borderColor: '#cccccc',
            borderWidth: 1,
            height: 200,
            borderRadius: 5,
          }}>
          <TextInput
            style={{maxHeight: 200, color: styles.textColor}}
            multiline={true}
            placeholder={'The greatest minds think diffrently.'}
            placeholderTextColor={dark ? '#cccccc' : '#e5e5e5'}
            selectionColor={'teal'}
            value={text}
            onChangeText={value => {
              setText(value);
              setjetLength(Max - text.length);
            }}
            spellCheck={true}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(234,234,234,0.2)',
              minWidth: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
              borderRadius: 10,
              padding: 5,
            }}>
            <Ionicons
              name="at"
              color={styles.textColor}
              size={20}
              style={{marginRight: 5}}
            />
            <Text style={{color: styles.textColor}}>Mention</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(234,234,234,0.2)',
              minWidth: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
              borderRadius: 10,
              padding: 5,
            }}>
            <Ionicons
              name="save-outline"
              color={styles.textColor}
              size={20}
              style={{marginRight: 5}}
            />
            <Text style={{color: styles.textColor}}>Save</Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'green'}}>{`${jetLength} left`}</Text>
        </View>
      </View>
      <View style={{padding: 10, alignSelf: 'flex-end'}}>
        <Button
          title={'Post'}
          buttonStyle={{backgroundColor: '#0a81ea', width: 100}}
          iconRight={true}
          icon={
            <Feather
              name={'send'}
              color={'white'}
              size={20}
              style={{marginLeft: 10}}
            />
          }
        />
      </View>
    </View>
  );
};

export default JetScreen;
