import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../../../../components';
import {Movie} from '../../../../types/movie';
import styles from './styles';
import {Colors} from '../../../../themes';
import FastImage from 'react-native-fast-image';
import Screen from '../../../../navigation/configs/Screen';

interface Props {
  data: Movie;
  navigation: any;
}

function MovieItem({data, navigation}: Props) {
  function onPress() {
    navigation.navigate(Screen.MovieDetail, {
      data,
    });
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text color="white" bold="semiBold" size="large">
        {data.name}
      </Text>
      <View style={styles.desc}>
        <Icons name="segment" size={16} color={Colors.grey.lighter} />
        <Text style={[styles.alterEgo]} color="lightGrey" size="small">
          {data.alterEgo}
        </Text>
        <View style={styles.dot} />
        <Text color="lightGrey" size="small">
          {data.comic}
        </Text>
      </View>
      <FastImage
        source={{
          uri: data.imgUrl,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

export default MovieItem;
