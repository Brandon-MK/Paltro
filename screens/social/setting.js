import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  const {styles, dark} = React.useContext(ThemeContext);
  const settings = [
    {
      title: 'General',
      content: [
        {name: 'Theme', icon: 'color-palette-outline'},
        {name: 'Account type', icon: 'ios-options-outline'},
        {name: 'Account growth', icon: 'stats-chart-outline'},
      ],
    },
    {
      title: 'Business',
      content: [
        {name: 'Start a business', icon: 'briefcase-outline'},
        {name: 'Promote', icon: 'rocket-outline'},
        {name: 'Engagements', icon: 'ios-people-outline'},
      ],
    },
    {
      title: 'Security',
      content: [
        {name: 'Privacy', icon: 'earth-outline'},
        {name: 'Security', icon: 'lock-closed-outline'},
        {name: 'Change password', icon: 'key-outline'},
        {name: 'Whose logged in', icon: 'phone-portrait-outline'},
      ],
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View
        style={{
          padding: 5,
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 5,
          backgroundColor: styles.Background,
        }}>
        <Ionicons
          name="cog-outline"
          size={30}
          color={styles.textColor}
          style={{marginRight: 5}}
        />
        <Text style={{fontSize: 30, color: styles.textColor}}>Settings</Text>
      </View>
      <FlatList
        data={settings}
        keyExtractor={(i, index) => index}
        renderItem={({item, index}) => (
          <View key={index} style={{padding: 10, paddingTop: 5}}>
            <View>
              <Text style={{color: dark ? 'grey' : '#444444', fontSize: 20}}>
                {item.title}
              </Text>
            </View>
            <View style={{padding: 10}}>
              {item.content.map((val, i) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('SettingView', {type: val.name})
                  }
                  key={i}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: i === item.content.length - 1 ? 0 : 15,
                    }}>
                    <Ionicons
                      name={val.icon}
                      color={styles.textColor}
                      size={30}
                      style={{marginRight: 10}}
                    />
                    <Text style={{color: styles.textColor, fontSize: 20}}>
                      {val.name}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Setting;
