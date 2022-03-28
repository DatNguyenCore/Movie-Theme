import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Images} from '../../../../themes';
import {Text} from '../../../../components';

function Header() {
  return (
    <View style={styles.header}>
      <Text color="white" size="larger" bold="bold">
        Explore
      </Text>
      <FastImage source={Images.icAvatar} style={styles.headerAvatar} />
    </View>
  );
}

export default Header;
