import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({
  Icon,
  name,
  text,
  ButtonPress,
  style,
  iconColor,
  iconSize,
  textstyle,
}) => {
  return (
    <View style={style}>
      <Pressable onPress={ButtonPress}>
        <View>
          {Icon ? (
            <Ionicons name={name} size={iconSize} color={iconColor} />
          ) : (
            <Text style={textstyle}>{text}</Text>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
