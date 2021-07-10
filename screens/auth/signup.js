import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Text, Select, CheckIcon} from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Button, SocialIcon, Input} from 'react-native-elements';
import {Checkbox} from 'native-base';

export const SignUp = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [secure, setsecure] = useState(false);
  const [secure2, setsecure2] = useState(false);
  let [language, setLanguage] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 20}}>
        <View style={{marginLeft: 10}}>
          <Text fontSize={25} fontFamily={'Roboto-Medium'}>
            Sign Up
          </Text>
        </View>
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
      <View
        style={{
          height: 320,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 20,
          }}>
          <Select
            selectedValue={language}
            minWidth={100}
            placeholder="Date"
            onValueChange={itemValue => setLanguage(itemValue)}
            _selectedItem={{
              bg: 'cyan.600',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="JavaScript" value="js" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="C" value="c" />
            <Select.Item label="Python" value="py" />
            <Select.Item label="Java" value="java" />
          </Select>
          <Select
            selectedValue={language}
            minWidth={110}
            placeholder="Month"
            onValueChange={itemValue => setLanguage(itemValue)}
            _selectedItem={{
              bg: 'cyan.600',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="JavaScript" value="js" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="C" value="c" />
            <Select.Item label="Python" value="py" />
            <Select.Item label="Java" value="java" />
          </Select>
          <Select
            selectedValue={language}
            minWidth={100}
            placeholder="Year"
            onValueChange={itemValue => setLanguage(itemValue)}
            _selectedItem={{
              bg: 'cyan.600',
              endIcon: <CheckIcon size={4} />,
            }}>
            <Select.Item label="JavaScript" value="js" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="C" value="c" />
            <Select.Item label="Python" value="py" />
            <Select.Item label="Java" value="java" />
          </Select>
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder="Email"
            onChangeText={text => setemail(text)}
            leftIcon={<Fontisto name="email" size={24} color="black" />}
          />
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder="Name"
            onChangeText={text => setemail(text)}
            leftIcon={
              <IonIcons name="ios-person-outline" size={24} color="black" />
            }
          />
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder="Username"
            onChangeText={text => setemail(text)}
            leftIcon={<IonIcons name="at" size={24} color="black" />}
          />
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder="Password"
            onChangeText={text => setpassword(text)}
            leftIcon={
              <IonIcons name="lock-closed-outline" size={24} color="black" />
            }
            rightIcon={
              <IonIcons
                name={secure ? 'eye-outline' : 'eye-off-outline'}
                size={30}
                color="black"
                onPress={() => setsecure(!secure)}
              />
            }
            secureTextEntry={secure}
          />
        </View>
        <View style={{width: '95%'}}>
          <Input
            placeholder="Confirm password"
            onChangeText={text => setpassword2(text)}
            leftIcon={
              <IonIcons name="lock-closed-outline" size={24} color="black" />
            }
            rightIcon={
              <IonIcons
                name={secure2 ? 'eye-outline' : 'eye-off-outline'}
                size={30}
                color="black"
                onPress={() => setsecure2(!secure2)}
              />
            }
            secureTextEntry={secure2}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginVertical: 10,
        }}>
        <Checkbox style={{marginRight: 5}} />
        <Text>Agree to terms and conditions</Text>
      </View>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: 10,
        }}>
        <Button
          title="Sign Up"
          buttonStyle={{backgroundColor: '#53BDFF'}}
          onPress={() => console.log(`${email} - ${password} - ${password2}`)}
        />
      </View>
    </View>
  );
};
export default SignUp;
