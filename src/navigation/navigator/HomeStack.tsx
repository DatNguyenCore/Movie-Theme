import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackNavigatorOptions} from '../configs/navigationStyles';
import HomeScreen from '../../features/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
