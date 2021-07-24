import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Text, Icon} from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Button, SocialIcon, Input} from 'react-native-elements';
import Auth from '@react-native-firebase/auth';
import {ThemeContext} from '../../theme/themeManger';

export const login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [secure, setsecure] = useState(false);
  const {ChangeUserId} = React.useContext(ThemeContext);

  const ViewIconText = () => {
    if (password.length === 0) {
      return <Text style={{fontSize: 15, color: '#20a8fc'}}>Forgot?</Text>;
    } else {
      return (
        <IonIcons
          name={secure ? 'eye-outline' : 'eye-off-outline'}
          size={30}
          color="black"
          onPress={() => setsecure(!secure)}
        />
      );
    }
  };

  const login = () => {
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        ChangeUserId(email);
        navigation.navigate('HomeSocial');
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../images/Chat.png')}
        style={{
          height: 170,
          zIndex: -1,
          width: '100%',
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <View>
        <View style={{marginLeft: 10}}>
          <Text fontSize={25} fontFamily={'Roboto-Medium'}>
            Login
          </Text>
        </View>

        <View
          style={{
            height: 180,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: -5,
          }}>
          <View style={{width: '95%'}}>
            <Input
              placeholder="Email"
              onChangeText={text => setemail(text)}
              leftIcon={
                <IonIcons name="ios-person-outline" size={24} color="black" />
              }
            />
          </View>
          <View style={{width: '95%'}}>
            <Input
              placeholder="Password"
              onChangeText={text => setpassword(text)}
              leftIcon={
                <IonIcons name="lock-closed-outline" size={24} color="black" />
              }
              rightIcon={ViewIconText()}
              secureTextEntry={secure}
            />
          </View>
        </View>
      </View>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <Button
          title="Login"
          buttonStyle={{backgroundColor: '#53BDFF'}}
          onPress={() => {
            login();
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 20,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E3E4E6',
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 30,
          }}>
          <Image
            source={require('../../images/google.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#E3E4E6',
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 30,
          }}>
          <Image
            source={require('../../images/facebook.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </View>
      <View>
        <Text style={{fontSize: 14, textAlign: 'center'}}>
          {`New to Paltro? `}
          <Text
            style={{color: '#20a8fc', fontSize: 14}}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default login;
