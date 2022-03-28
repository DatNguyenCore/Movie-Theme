import React from 'react';
import {View} from 'react-native';
import Text from '../Text';
import styles from './styles';

function NoData() {
  return (
    <View style={styles.container}>
      <Text color="highGrey">No Data</Text>
    </View>
  );
}

export default NoData;
