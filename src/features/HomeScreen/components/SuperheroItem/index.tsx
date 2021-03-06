import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../../../../components';
import {Superhero} from '../../../../types/superhero';
import styles from './styles';
import {Colors} from '../../../../themes';
import FastImage from 'react-native-fast-image';
import {NavigationProps} from '../../../../navigation/configs/NavigationProps';
import Screen from '../../../../navigation/configs/Screen';

interface Props extends NavigationProps<Screen.SuperheroDetail> {
  data: Superhero;
}

function SuperheroItem({data, navigation}: Props) {
  function onPress() {
    navigation.navigate(Screen.SuperheroDetail, {
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

export default SuperheroItem;
