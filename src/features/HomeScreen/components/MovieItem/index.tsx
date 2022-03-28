import React from 'react';
import {View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../../../../components';
import {Movie} from '../../../../types/movie';
import styles from './styles';
import {Colors} from '../../../../themes';
import FastImage from 'react-native-fast-image';

interface Props {
  data: Movie;
}

function MovieItem({data}: Props) {
  return (
    <View style={styles.container}>
      <Text color="white" bold="semiBold" size="large">
        {data.name}
      </Text>
      <View style={styles.desc}>
        <Icons name="segment" size={16} color={Colors.grey.lighter} />
        <Text style={[styles.text, styles.alterEgo]} size="small">
          {data.alterEgo}
        </Text>
        <View style={styles.dot} />
        <Text style={styles.text} size="small">
          {data.comic}
        </Text>
      </View>
      <FastImage
        source={{
          uri: data.imgUrl,
        }}
        style={styles.image}
      />
    </View>
  );
}

export default MovieItem;
