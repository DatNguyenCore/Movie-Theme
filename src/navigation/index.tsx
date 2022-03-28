import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigator/MovieStack';

function AppNavigator() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  );
}

export default AppNavigator;
