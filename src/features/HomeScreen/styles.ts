import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  header: {
    margin: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey.lightest,
    paddingBottom: Metrics.baseMargin,
  },
  headerAvatar: {
    width: 54,
    height: 54,
    borderRadius: 42,
    overflow: 'hidden',
  },
});
