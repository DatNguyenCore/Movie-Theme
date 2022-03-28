import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Text from '../Text';
import styles from './styles';

type Props = {
  label?: string;
  onPress?: () => void;
};

export default function NavLight({label = '', onPress}: Props) {
  const navigation = useNavigation();

  function handlePress() {
    if (onPress) {
      return onPress();
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={handlePress}>
        <Icons name="arrow-back-ios" color="#7385A8" size={25} />
      </TouchableOpacity>
      <Text color="title" bold="bolder" size="large">
        {label}
      </Text>
    </View>
  );
}
