import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RouteProps from './RouteProps';

export interface NavigationProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = RouteProps,
> {
  navigation: NativeStackNavigationProp<ScreenProps, TScreen>;
}

export type HookNavigationProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = RouteProps,
> = NativeStackNavigationProp<ScreenProps, TScreen>;

export type NavigationWithRouteProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = RouteProps,
> = {
  route: RouteProp<ScreenProps, TScreen>;
};
