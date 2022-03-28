import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Colors, Images} from '../../../../themes';
import {Text} from '../../../../components';
import MovieActions from '../../../../reduxs/reducer/MovieReducer';

function Header() {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  function onSearch(value: string) {
    setText(value);
    dispatch(MovieActions.searchMovie(value.toLocaleLowerCase()));
  }

  function onClearSearch() {
    setText('');
    dispatch(MovieActions.searchMovie(''));
  }

  function renderClearButton() {
    if (typeof text !== 'string' || text.length === 0) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.clearBtn} onPress={onClearSearch}>
        <Icons
          name="cancel"
          size={20}
          color={Colors.white}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text color="white" size="larger" bold="bold">
          Explore
        </Text>
        <FastImage source={Images.icAvatar} style={styles.headerAvatar} />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          returnKeyType="done"
          value={text}
          onChangeText={onSearch}
          placeholder="Search..."
          placeholderTextColor={Colors.grey.lighter}
        />
        {renderClearButton()}
      </View>
    </View>
  );
}

export default Header;
