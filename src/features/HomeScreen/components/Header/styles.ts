import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../../themes';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey.lightest,
    paddingBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.mediumMargin,
  },
  header: {
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 45,
    height: 45,
    borderRadius: 42,
    overflow: 'hidden',
  },
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: Metrics.baseMargin,
    paddingRight: 55,
    width: '100%',
    backgroundColor: '#4b4c61',
    fontSize: Fonts.size.default,
    borderRadius: Metrics.mediumMargin,
    color: Colors.white,
  },
  clearBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 11,
  },
  icon: {},
});
