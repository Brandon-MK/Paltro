import React from 'react';
import {View} from 'react-native';
import FoodHeader from '../../components/FoodHeader';
import FoodView from '../../components/FoodView';
import FoodContent from '../../components/FoodContent';

const HomeFood = () => {
  return (
    <View>
      <FoodHeader />
      <FoodView />
      <FoodContent />
    </View>
  );
};

export default HomeFood;
