import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Image, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Enytpo from 'react-native-vector-icons/Entypo';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import {ScrollView} from 'react-native';

const JetScreen = () => {
  const {styles, dark} = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [jetLength, setjetLength] = useState(0);
  const [view, setView] = useState(false);
  const Max = 500;
  const [textInput, settextInput] = useState([]);
  const [inputData, setinputData] = useState([]);

  const PollViewer = () => {
    const addValues = (text, index) => {
      let dataArray = inputData;
      let checkBool = false;
      if (dataArray.length !== 0) {
        dataArray.forEach(element => {
          if (element.index === index) {
            element.text = text;
            checkBool = true;
          }
        });
      }
      if (checkBool) {
        setinputData(dataArray);
      } else {
        dataArray.push({text: text, index: index});
        setinputData(dataArray);
      }
    };
    const addTextInput = index => {
      settextInput(
        ...textInput,
        <TextInput
          style={{
            backgroundColor: dark ? '#444444' : '#cccccc',
            color: styles.textColor,
            borderRadius: 20,
            paddingLeft: 10,
            width: '90%',
          }}
          onChangeText={text => addValues(text, index)}
        />,
      );
    };

    //function to remove TextInput dynamically
    const removeTextInput = () => {
      let textInput = textInput;
      let inputData = inputData;
      textInput.pop();
      inputData.pop();
      settextInput(textInput);
      setinputData(inputData);
    };

    //function to add text from TextInputs into single array

    //function to console the output
    const getValues = () => {
      console.log('Data', inputData);
    };

    return (
      <View
        style={{
          alignItems: 'center',
          width: '95%',
          backgroundColor: dark ? '#222222' : '#e5e5e5',
          margin: 10,
          marginTop: 0,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 12,
          }}>
          <Text style={{color: styles.textColor, fontSize: 17, paddingTop: 5}}>
            Enter your polls
          </Text>
          <Ionicons
            name="add-circle-outline"
            size={22}
            color={styles.textColor}
            style={{marginTop: 5}}
            onPress={() => addTextInput(textInput.length)}
          />
        </View>
        <View style={{width: '90%', marginVertical: 10}}>
          <TextInput
            placeholder={'Decision'}
            placeholderTextColor={'grey'}
            style={{
              backgroundColor: dark ? '#444444' : '#cccccc',
              color: styles.textColor,
              borderRadius: 20,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{width: '90%', marginVertical: 10}}>
          <TextInput
            placeholder={'Decision'}
            placeholderTextColor={'grey'}
            style={{
              backgroundColor: dark ? '#444444' : '#cccccc',
              color: styles.textColor,
              borderRadius: 20,
              paddingLeft: 10,
            }}
          />
        </View>
        {textInput.length > 0
          ? textInput.map(value => {
              return value;
            })
          : null}
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: styles.Background,
          elevation: 5,
        }}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View>
              <Text style={{color: 'green'}}>{`${jetLength} left`}</Text>
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
        <View>{view ? <PollViewer /> : null}</View>
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
            <Pressable onPress={() => setView(!view)}>
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
                <Text style={{color: styles.textColor}}>polls</Text>
              </View>
            </Pressable>
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
      </ScrollView>
    </View>
  );
};

export default JetScreen;
