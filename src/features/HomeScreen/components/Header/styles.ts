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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4b4c61',
    borderRadius: Metrics.mediumMargin,
    overflow: 'hidden',
  },
  textInput: {
    paddingVertical: 8,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.mediumMargin,
    fontSize: Fonts.size.default,
    color: Colors.white,
    flex: 1,
    height: 45,
  },
  clearBtn: {
    padding: 10,
  },
});
