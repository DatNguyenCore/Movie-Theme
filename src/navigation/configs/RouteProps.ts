import Screen from './Screen';
import {Superhero} from '../../types/superhero';

type ScreenRouteProps = {
  [Screen.Home]: undefined;
  [Screen.SuperheroDetail]: {
    data: Superhero;
  };
};

// eslint-disable-next-line no-undef
export default ScreenRouteProps;
