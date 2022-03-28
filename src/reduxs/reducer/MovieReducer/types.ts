import {Movie} from '../../../types/movie';

export interface MovieState {
  data: Movie[];
  fetching: boolean;
  textSearch: string;
}

export interface MoviesSuccessPayload {
  data: Movie[];
}

export interface SearchMoviePayload {
  text: string;
}
