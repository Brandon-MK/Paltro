import React, {useState} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const {styles, Dark} = React.useContext(ThemeContext);
  const [name, setName] = useState('Mick John');
  const [username, setUsername] = useState('@mickjohn');
  const [bio, setBio] = useState('heyy\nbaddie right here');
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View
        style={{
          padding: 10,
          elevation: 5,
          backgroundColor: styles.Background,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Entypo
          name="chevron-left"
          style={{marginRight: 5}}
          size={25}
          color={styles.textColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 20, color: styles.textColor}}>
          Change profile
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <View>
            <Image
              source={require('../../images/user.png')}
              style={{width: 100, height: 100, borderRadius: 60}}
            />
          </View>
          <View style={{width: '100%'}}>
            <View style={{margin: 10}}>
              <Text
                style={{
                  marginBottom: -15,
                  fontSize: 15,
                  color: 'grey',
                }}>
                Name
              </Text>
              <TextInput
                value={name}
                onChangeText={item => setName(item)}
                style={{
                  borderBottomColor: styles.timeStampColor,
                  borderBottomWidth: 1,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  color: styles.textColor,
                }}
              />
            </View>
            <View style={{margin: 10}}>
              <Text
                style={{
                  marginBottom: -15,
                  fontSize: 15,
                  color: 'grey',
                }}>
                Username
              </Text>
              <TextInput
                value={username}
                onChangeText={item => setUsername(item)}
                style={{
                  borderBottomColor: styles.timeStampColor,
                  borderBottomWidth: 1,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  color: styles.textColor,
                }}
              />
            </View>
            <View style={{margin: 10}}>
              <Text style={{fontSize: 15, color: 'grey'}}>Biography</Text>
              <View
                style={{
                  width: '100%',
                  height: 200,
                  borderColor: styles.timeStampColor,
                  borderWidth: 1,
                }}>
                <TextInput
                  onChangeText={item => setBio(item)}
                  value={bio}
                  multiline={true}
                  style={{paddingTop: 0, color: styles.textColor}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
