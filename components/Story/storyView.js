import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, Dimensions, TextInput, Animated} from 'react-native';

const StoryView = ({avatar, data, username, name, animation, index}) => {
  const {width, height} = Dimensions.get('window');
  const [StoryWidth, setWidth] = useState(0);
  return (
    <View>
      <View>
        <View>
          <Image
            source={{uri: data[0].image}}
            style={{
              width: width,
              height: height,
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            top: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  width: `${95 / data.length}%`,
                  height: 3,
                  backgroundColor: 'rgba(204, 204, 204,0.5)',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}>
                {index === 0 ? (
                  <Animated.View
                    style={{
                      width: '20%',
                      height: '100%',
                      borderRadius: 10,
                      backgroundColor: '#cccccc',
                    }}
                  />
                ) : null}
              </View>
            ))}
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: avatar}}
              style={{width: 50, height: 50, borderRadius: 60}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 17}}>{name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'black',
                  }}>
                  {username}
                </Text>
                <Text style={{fontSize: 12, color: '#cccccc', marginLeft: 10}}>
                  Today 8:30 am
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            width: '95%',
            alignSelf: 'center',
          }}>
          <View>
            <TextInput
              placeholder={'Send your message'}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'white'}
              style={{
                height: 40,
                borderRadius: 40,
                paddingLeft: 15,
                borderColor: '#eaeaea',
                borderWidth: 1,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StoryView;
