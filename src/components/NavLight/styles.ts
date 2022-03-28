import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    left: Metrics.baseMargin,
    position: 'absolute',
  },
});
