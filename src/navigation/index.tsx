import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigator/MovieStack';
import {Colors} from '../themes';

function AppNavigator() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundScreen}
      />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  );
}

export default AppNavigator;
