import React from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {Text, NavLight} from '../../../../components';
import styles from './styles';
import {NavigationWithRouteProps} from '../../../../navigation/configs/NavigationProps';
import Screen from '../../../../navigation/configs/Screen';

interface Props extends NavigationWithRouteProps<Screen.MovieDetail> {}

function MovieDetailScreen({route}: Props) {
  const routeData = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <NavLight />
      <ScrollView style={styles.scrollView}>
        <FastImage
          source={{
            uri: routeData.imgUrl,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text color="white" bold="bold" size="larger" style={styles.name}>
            {routeData.name}
          </Text>
          <Text
            color="highGrey"
            style={styles.director}>{`Director: ${routeData.alterEgo}`}</Text>
          <Text
            color="highGrey"
            style={styles.comic}>{`Comic: ${routeData.comic}`}</Text>
          <Text color="white">{routeData.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MovieDetailScreen;
