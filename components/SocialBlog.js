import React from 'react';
import {View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeProvider, ThemeContext} from '../theme/themeManger';

const SocialBlog = () => {
  const {styles} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          backgroundColor: styles.cardBackground,
          padding: 10,
          borderRadius: 10,
          elevation: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 5,
          }}>
          <LinearGradient
            colors={['#18cc21', '#00d4ff']}
            angle={90}
            useAngle={true}
            style={{borderRadius: 10, width: 90}}>
            <Pressable onPress={() => navigation.navigate('JetScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                  justifyContent: 'center',
                }}>
                <Feather
                  name="book"
                  size={20}
                  color={'white'}
                  style={{marginRight: 5}}
                />
                <Text style={{color: '#e5e5e5', fontSize: 15}}>Story</Text>
              </View>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={['#eb580a', '#ffda00']}
            angle={90}
            useAngle={true}
            style={{borderRadius: 10, width: 90}}>
            <Pressable onPress={() => navigation.navigate('Camera')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                  justifyContent: 'center',
                }}>
                <Feather
                  name="camera"
                  size={20}
                  color={'white'}
                  style={{marginRight: 5}}
                />
                <Text style={{color: '#e5e5e5', fontSize: 15}}>Image</Text>
              </View>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={['#0a62eb', '#00e4ff']}
            angle={90}
            useAngle={true}
            style={{
              borderRadius: 10,
              width: 90,
            }}>
            <Pressable onPress={() => navigation.navigate('JetScreen')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                  justifyContent: 'center',
                }}>
                <Feather
                  name="edit-2"
                  size={20}
                  color={'white'}
                  style={{marginRight: 5}}
                />
                <Text style={{color: '#e5e5e5', fontSize: 15}}>Jet</Text>
              </View>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default SocialBlog;
