import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackNavigatorOptions} from '../configs/navigationStyles';
import HomeScreen from '../../features/HomeScreen';
import Screen from '../configs/Screen';
import SuperheroDetailScreen from '../../features/Superhero/screens/SuperheroDetailScreen';

const Stack = createNativeStackNavigator();

function SuperheroStack() {
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
        name={Screen.SuperheroDetail}
        component={SuperheroDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default SuperheroStack;
