import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigator/HomeStack';

function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
