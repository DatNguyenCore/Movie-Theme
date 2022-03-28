import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Text} from '../../components';
import {Images} from '../../themes';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text color="white" size="larger" bold="bold">
          Explore
        </Text>
        <FastImage source={Images.icAvatar} style={styles.headerAvatar} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
