import {Colors} from '../../themes';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const stackNavigatorOptions: NativeStackNavigationOptions = {
  headerTintColor: Colors.black,
  headerTitleStyle: {color: Colors.black},
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerBackTitle: undefined,
  headerStyle: {
    backgroundColor: Colors.white,
  },
};
