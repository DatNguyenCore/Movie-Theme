import Screen from './Screens';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ScreenNavigationProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = StackScreenProps,
> = {
  navigation: NativeStackNavigationProp<ScreenProps, TScreen>;
};

export type ScreenPropsWithRoute<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = StackScreenProps,
> = {
  
  route: RouteProp<ScreenProps, TScreen>;
};

export type StackScreenRouteParams<TScreen extends keyof StackScreenProps> =
  StackScreenProps[TScreen];

// ------------ Props ----------------
type StackScreenProps = {
  [Screen.SingleDataPicker]: {
    screenTitle: string;
    listOfOptions: any[];
    __onSelected__: (data: any) => void;
    searchable?: boolean;
    selectedItem?: string | number | undefined;
  };
  [Screen.MultiDataPickerScreen]: {
    screenTitle: string;
    listOfOptions: any[];
    __onSelected__: (data: any) => void;
    searchable?: boolean;
    selectedItem?: string | number | undefined;
  },
  [Screen.ShowMediaScreen]: {
    imageUrls: ImageUrl[];
    index?: number;
  }
};

type ImageUrl = {
  title: string;
  url: string;
  props?: any;
}

export default StackScreenProps;
