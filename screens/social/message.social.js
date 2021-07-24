import React, {useState, useRef, useEffect} from 'react';
import {View, FlatList, Text, TextInput, Keyboard, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeProvider, ThemeContext} from '../../theme/themeManger';

const MessageScreen = ({route, navigation}) => {
  const {name, profileImage} = route.params;
  const [input, setInput] = useState('');
  const [data, setData] = useState([
    {id: '1', message: 'Hey', timestamp: '8:07 pm', key: '1'},
    {id: '1', message: 'I am kevin.', timestamp: '8:08 pm', key: '2'},
    {id: '2', message: 'Hello, Kevin', timestamp: '8:10 pm', key: '3'},
    {
      id: '1',
      message: 'I was wondering if you could take my picture',
      timestamp: '8:15 pm',
      key: '4',
    },
    {id: '2', message: 'Ok would be great', timestamp: '8:30 pm', key: '5'},
  ]);
  const {styles} = React.useContext(ThemeContext);
  const flatlistRef = useRef();
  const scrollToEnd = () => {
    flatlistRef.current.scrollToEnd({animating: true});
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  return (
    <View style={{minHeight: '100%', backgroundColor: styles.Background}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: styles.cardBackground,
          elevation: 3,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Ionicons
              name="chevron-back"
              size={25}
              onPress={() => navigation.goBack()}
              color={styles.textColor}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: profileImage}}
              style={{height: 30, width: 30, borderRadius: 50}}
            />
            <Text
              style={{fontSize: 17, marginLeft: 10, color: styles.textColor}}>
              {JSON.stringify(name).slice(1, name.length + 1)}
            </Text>
          </View>
        </View>

        <View>
          <Feather name="more-horizontal" size={25} color={styles.textColor} />
        </View>
      </View>
      {/* 75% for when the keyboard arises and 84% */}
      <FlatList
        style={{height: keyboardStatus ? '75%' : '84%', flexGrow: 0}}
        ref={flatlistRef}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#20a8fc',
              maxWidth: 150,
              minWidth: 70,
              padding: 8,
              margin: 10,
              borderRadius: 20,
              alignSelf: item.id === '1' ? 'flex-start' : 'flex-end',
            }}>
            <View>
              <Text>{item.message}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 10, alignSelf: 'flex-end'}}>
              {item.timestamp}
            </Text>
          </View>
        )}
        key={({item}) => item.key}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Enter message"
          multiline={true}
          value={input}
          onChangeText={text => setInput(text)}
          style={{
            width: '85%',
            backgroundColor: styles.inputBackground,
            paddingLeft: 10,
            maxHeight: input.includes('\n') ? 100 : 50,
          }}
        />
        <View
          style={{
            backgroundColor: '#20a8fc',
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather
            name={'send'}
            size={25}
            color={'white'}
            onPress={() => {
              input.includes('\n')
                ? setData([
                    ...data,
                    {
                      id: '2',
                      message: input.replace('\n', '\n'),
                      timestamp: '8:35 pm',
                      key: Math.random(1000),
                    },
                  ])
                : setData([
                    ...data,
                    {
                      id: '2',
                      message: input,
                      timestamp: '8:35 pm',
                      key: Math.random(1000),
                    },
                  ]);
              scrollToEnd();
              setInput('');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MessageScreen;
