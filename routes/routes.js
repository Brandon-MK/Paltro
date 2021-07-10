import React from 'react';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import HomeSocial from '../screens/social/homeSocial';
import ProfileSocial from '../screens/social/profileSocial';
import DiscoverSocial from '../screens/social/discoverSocial';
import NotiSocial from '../screens/social/notiSocial';
import SearchSocial from '../screens/social/searchSocial';
import ChatSocial from '../screens/social/chatSocial';
import HomeFood from '../screens/food/homefood';
import CartFood from '../screens/food/cartfood';
import DealsFood from '../screens/food/dealsfood';
import HomeShop from '../screens/shop/homeshop';
import CartShop from '../screens/shop/cartshop';
import WishShop from '../screens/shop/wishshop';
import HomeMusic from '../screens/music/homemusic';
import LikeMusic from '../screens/music/likemusic';
import Podcasts from '../screens/music/podcasts';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const horizontalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const bottomStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 10,
  marginHorizontal: 20,
  height: 60,
  borderRadius: 10,
  elevation: 3,
};

const bottomOptions = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: bottomStyle,
};

const SocialBottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={bottomOptions}>
      <Tab.Screen
        name="HomeSocial"
        component={HomeSocial}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverSocial"
        component={DiscoverSocial}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="compass-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotiSocial"
        component={NotiSocial}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="notifications-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatSocial"
        component={ChatSocial}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="chatbubble-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const FoodBottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={bottomOptions}>
      <Tab.Screen
        name="HomeFood"
        component={HomeFood}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cartFood"
        component={CartFood}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="cart-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DealsFood"
        component={DealsFood}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="percent"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ShopBottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={bottomOptions}>
      <Tab.Screen
        name="HomeShop"
        component={HomeShop}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishShop"
        component={WishShop}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="heart"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartShop"
        component={CartShop}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="cart-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MusicBottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={bottomOptions}>
      <Tab.Screen
        name="HomeMusic"
        component={HomeMusic}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LikeMusic"
        component={LikeMusic}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="heart"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Podcasts"
        component={Podcasts}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="mic-outline"
              size={30}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={horizontalAnimation} headerMode={false}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeSocial" component={SocialBottomTabs} />
        <Stack.Screen name="ProfileSocial" component={ProfileSocial} />
        <Stack.Screen name="SearchSocial" component={SearchSocial} />
        <Stack.Screen name="HomeFood" component={FoodBottomTabs} />
        <Stack.Screen name="HomeShop" component={ShopBottomTabs} />
        <Stack.Screen name="HomeMusic" component={MusicBottomTabs} />
        <Stack.Screen name="DiscoverSocial" component={DiscoverSocial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
