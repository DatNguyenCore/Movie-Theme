import {Movie} from '../../../types/movie';

export interface MovieState {
  data: Movie[];
  fetching: boolean;
}
