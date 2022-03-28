import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SuperheroStack from './navigator/SuperheroStack';
import {Colors} from '../themes';

function AppNavigator() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundScreen}
      />
      <NavigationContainer>
        <SuperheroStack />
      </NavigationContainer>
    </>
  );
}

export default AppNavigator;
