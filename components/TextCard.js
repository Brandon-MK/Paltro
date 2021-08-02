import React, {useState, useCallback, useRef} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet from './bottomSheet';
import {Input} from 'native-base';
import {ThemeContext} from '../MainContext/MainContext';
import LoadingImage from './loadingImage';

const TextCard = props => {
  const {styles} = React.useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const TimeStamp = time => {
    const Months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    };
    const currentTime = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? ' pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? ' 0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      <Text
        style={{
          fontSize: 10,
          color: 'grey',
        }}>{`${strTime} • ${time.getDate()} ${
        Months[time.getMonth()]
      } ${time.getFullYear()}`}</Text>
    );
  };
  const refRBSheet = useRef();
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  const commentView = () => {
    // console.table(...props.Comments);
    if (props.Comments.length > 0) {
      return props.Comments.map(item => {
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 5,
              marginVertical: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <View>
                <Image
                  source={{uri: item.profileImage}}
                  style={{width: 50, height: 50, borderRadius: 10}}
                />
              </View>
              <View style={{marginHorizontal: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 15}}>{item.name}</Text>
                  <Text style={{color: 'grey', fontSize: 13, marginLeft: 5}}>
                    @{item.username}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'grey',
                  }}>
                  {TimeStamp(item.timestamp)}
                </Text>
                <View style={{marginTop: 2}}>
                  <Text style={{color: 'black'}}>{item.comment}</Text>
                </View>
              </View>
            </View>
            <View>
              <Ionicons name={'ios-heart-outline'} size={20} />
            </View>
          </View>
        );
      });
    } else if (props.Comments.length === 0) {
      return (
        <View
          style={{
            marginTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'grey'}}>
            Be the first to comment
          </Text>
        </View>
      );
    }
  };

  return (
    <View
      style={[
        {
          width: '95%',
          borderRadius: 10,
          elevation: 2,
          alignSelf: 'center',
          backgroundColor: styles.cardBackground,
          marginVertical: 10,
        },
        props.customStyles,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 7,
          marginTop: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={{
                uri: props.ProfileImage,
              }}
              onLoadEnd={() => setLoading(false)}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            {loading ? <LoadingImage type={'user'} /> : null}
          </View>

          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, color: styles.textColor}}>
              {props.Name}
            </Text>
            <Text style={{fontSize: 13, color: styles.textColor}}>
              @{props.Username}
            </Text>
          </View>
        </View>
        <View>
          <Feather name="more-horizontal" size={24} />
        </View>
      </View>
      <View style={{paddingVertical: 10}}>
        <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
          <Text
            onTextLayout={onTextLayout}
            style={{color: styles.textColor}}
            numberOfLines={textShown ? undefined : 4}>
            {props.Text}
          </Text>
          {lengthMore ? (
            <Text
              onPress={toggleNumberOfLines}
              style={{
                lineHeight: 21,
                // marginTop: 5,
                color: styles.textColor,
                fontSize: 10,
              }}>
              {textShown ? 'Read less...' : 'Read more...'}
            </Text>
          ) : null}
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, color: styles.timeStampColor}}>
            {TimeStamp(props.Timestamp)}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '23%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Ionicons
              name="heart-outline"
              size={32}
              color={liked ? 'red' : styles.IconColor}
              onPress={() => setLiked(!liked)}
            />
          </View>
          <View>
            <Ionicons
              name="ios-chatbox-outline"
              size={29}
              color={styles.IconColor}
              onPress={() => refRBSheet.current.open()}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: styles.textColor,
            }}>{`95 likes • ${props.Comments.length} comments`}</Text>
        </View>
      </View>
      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          container: {backgroundColor: '#eaeaea'},
        }}>
        <View style={{height: '95%', backgroundColor: '#eaeaea'}}>
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 20}}>Comments</Text>
          </View>
          <ScrollView>{commentView()}</ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 1,
              backgroundColor: 'white',
              width: '100%',
            }}>
            <Input
              variant="underlined"
              placeholder="Enter comment"
              width={'100%'}
              height={50}
              InputRightElement={
                <Feather name="send" size={30} style={{marginHorizontal: 5}} />
              }
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default TextCard;
