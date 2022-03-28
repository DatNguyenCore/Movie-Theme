import Screen from './Screen';
import {Movie} from '../../types/movie';

type ScreenRouteProps = {
  [Screen.Home]: undefined;
  [Screen.MovieDetail]: {
    data: Movie;
  };
};

// eslint-disable-next-line no-undef
export default ScreenRouteProps;
