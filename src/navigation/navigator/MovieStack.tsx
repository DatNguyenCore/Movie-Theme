import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackNavigatorOptions} from '../configs/navigationStyles';
import HomeScreen from '../../features/HomeScreen';
import Screen from '../configs/Screen';
import MovieDetailScreen from '../../features/Movie/screens/MovieDetailScreen';

const Stack = createNativeStackNavigator();

function MovieStack() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screen.MovieDetail}
        component={MovieDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MovieStack;
