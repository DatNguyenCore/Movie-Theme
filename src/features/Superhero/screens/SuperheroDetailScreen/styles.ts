import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  scrollView: {},
  image: {
    width: '100%',
    aspectRatio: 1.7778,
    marginBottom: Metrics.baseMargin,
  },
  content: {
    marginHorizontal: Metrics.baseMargin,
  },
  name: {
    marginBottom: Metrics.smallMargin,
  },
  director: {
    marginBottom: Metrics.smallMargin,
  },
  comic: {
    marginBottom: Metrics.baseMargin,
  },
});
