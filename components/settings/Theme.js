import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Theme = () => {
  const navigation = useNavigation();
  const {styles, ToggleTheme} = React.useContext(ThemeContext);
  const [Dark, setDark] = React.useState(true);

  return (
    <View style={{flex: 1, backgroundColor: styles.Background}}>
      <View
        style={{
          elevation: 5,
          backgroundColor: styles.Background,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Entypo
          name="chevron-left"
          size={25}
          color={styles.textColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 20, color: styles.textColor, padding: 12}}>
          Theme
        </Text>
      </View>
      <View style={{padding: 10}}>
        <Pressable
          onPress={() => {
            ToggleTheme(true);
            setDark(true);
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            name={Dark ? 'moon' : 'moon-outline'}
            color={styles.textColor}
            size={25}
          />
          <Text style={{color: styles.textColor, fontSize: 20, margin: 10}}>
            Dark Theme
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            ToggleTheme(false);
            setDark(false);
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            name={Dark ? 'sunny-outline' : 'sunny'}
            color={styles.textColor}
            size={25}
          />
          <Text style={{color: styles.textColor, fontSize: 20, margin: 10}}>
            Light Theme
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Theme;
