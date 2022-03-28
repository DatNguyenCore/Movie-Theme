import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

const styles = StyleSheet.create({
  text: {
    fontWeight: Fonts.weight.regular,
    fontSize: 16,
    color: Colors.text.body,
    fontFamily: 'Inter',
  },
  semiBold: {
    fontWeight: Fonts.weight.semiBold,
  },
  bold: {
    fontWeight: Fonts.weight.bold,
  },
  bolder: {
    fontWeight: Fonts.weight.bolder,
  },
  tiny: {
    fontSize: Fonts.size.smaller,
  },
  small: {
    fontSize: Fonts.size.small,
  },
  large: {
    fontSize: Fonts.size.large,
  },
  larger: {
    fontSize: Fonts.size.larger,
  },
  white: {
    color: Colors.white,
  },
  error: {
    color: Colors.error,
  },
  link: {
    color: Colors.text.link,
  },
  black: {
    color: Colors.black,
  },
  title: {
    color: Colors.text.title,
  },
  body: {
    color: Colors.text.body,
  },
  bodySecondary: {
    color: Colors.text.bodySecondary,
  },
  success: {
    color: Colors.success,
  },
  lightGrey: {
    color: Colors.grey.lighter,
  },
  highGrey: {
    color: '#7d818f',
  },
});

export default styles;
