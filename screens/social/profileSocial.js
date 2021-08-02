import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import TextCard from '../../components/TextCard';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import {Pressable} from 'react-native';
import {GetUserContent} from '../../Api/SocialApi';
import Button from '../../components/buttons';

const ProfileSocial = ({route}) => {
  var tabsRef = useRef();
  const {UserData} = route.params;
  const [Tab, setTab] = useState(0);
  const navigation = useNavigation();
  const {styles, dark} = React.useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [jets, setJets] = useState([]);
  const [loading, setLoading] = useState(true);
  const width = Dimensions.get('window').width;

  const ScrollToNext = index => {
    tabsRef.current.scrollTo({
      x: width * index,
      animated: true,
    });
  };
  const GetContent = async () => {
    try {
      await GetUserContent().then(res => {
        setImages(res[0].Images);
        setJets(res[1].Jets);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetContent();
  }, []);

  return (
    <View style={{backgroundColor: styles.Background, flex: 1}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            paddingHorizontal: 10,
            backgroundColor: styles.cardBackground,
            elevation: 2,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={30}
              color={styles.textColor}
            />
          </TouchableOpacity>
          <Feather name="user" size={30} color={styles.textColor} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1}}
        nestedScrollEnabled={true}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Roboto-Medium',
                color: styles.textColor,
              }}>
              {UserData.Name}
            </Text>
            {/* <Text
              style={{
                fontSize: 13,
                color: 'grey',
                marginVertical: 5,
              }}>
              Software Engineer
            </Text> */}
          </View>

          <Image
            source={{
              uri: UserData.ProfileImage,
            }}
            style={{width: 90, height: 90, borderRadius: 50}}
          />
          <View>
            <Text
              style={{
                fontSize: 13,
                color: styles.textColor,
                fontFamily: 'Roboto-Medium',
              }}>
              {`@${UserData.Username}`}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            text={'Edit Profile'}
            textstyle={{color: 'white'}}
            ButtonPress={() =>
              navigation.navigate('SettingView', {type: 'Profile'})
            }
            style={{
              backgroundColor: '#20a8fc',
              minWidth: 120,
              height: 40,
              marginRight: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
          />

          <Button
            Icon={true}
            ButtonPress={() => navigation.navigate('Setting')}
            name={'ios-settings-outline'}
            iconSize={25}
            iconColor={styles.textColor}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 5,
              color: styles.textColor,
            }}>
            {UserData.Biography.replace('\\n', '\n')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 50,
            marginTop: 5,
            marginBottom: 10,
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: styles.textColor,
              }}>
              12K
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Followers
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: styles.textColor,
              }}>
              50
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Posts
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: styles.textColor,
              }}>
              10
            </Text>
            <Text style={{fontSize: 12, color: 'grey', textAlign: 'center'}}>
              Following
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: dark ? '#222222' : '#cccccc',
            elevation: 5,
            padding: 12,
          }}>
          <Text style={{fontSize: 17, color: styles.textColor}}>Images</Text>
          <Text style={{fontSize: 17, color: styles.textColor}}>Jets</Text>
          <Text style={{fontSize: 17, color: styles.textColor}}>Mentions</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={tabsRef}
          pagingEnabled>
          <View
            style={{
              width: width,
              minHeight: 10,
            }}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {images.length <= 0
                  ? null
                  : images.map((item, index) =>
                      Array.isArray(item.Images) ? (
                        item.Images.slice(0, 1).map((item, index2) => (
                          <Image
                            key={index2}
                            source={{
                              uri: item.image,
                            }}
                            style={{
                              width: 120,
                              height: 120,
                            }}
                          />
                        ))
                      ) : (
                        <Image
                          key={index}
                          source={{
                            uri: item.Images,
                          }}
                          style={{
                            width: 120,
                            height: 120,
                          }}
                        />
                      ),
                    )}
              </View>
            </View>
          </View>
          <View
            style={{
              width: width,
              minHeight: 10,
            }}>
            <View>
              {jets.map((item, index) => (
                <TextCard
                  key={index}
                  Name={item.Name}
                  Username={item.Username}
                  Timestamp={new Date('July 06, 2021 05:00:00')}
                  ProfileImage={item.ProfileImage}
                  Text={item.Text}
                  Comments={[]}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: width,
              height: '100%',
            }}>
            <View style={{padding: 10}}>
              <Text>Third Screen</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/*  */}
    </View>
  );
};

export default ProfileSocial;
