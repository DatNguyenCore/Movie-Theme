import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {MovieState, MoviesSuccessPayload, SearchMoviePayload} from './types';

// =========== Create State ===========
const INITIAL_STATE = Immutable<MovieState>({
  data: [],
  fetching: false,
  textSearch: '',
});

// =========== Create Action ===========
export interface MovieActionTypes {
  GET_MOVIES: 'GET_MOVIES';
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS';
  GET_MOVIES_FAILURE: 'GET_MOVIES_FAILURE';
  SEARCH_MOVIE: 'SEARCH_MOVIE';
}

const {Types, Creators} = createActions({
  getMovies: [],
  getMoviesSuccess: ['data'],
  getMoviesFailure: [],
  searchMovie: ['text'],
});

export const MovieTypes = Types;
export default Creators;

const getMovies = (state: MovieState) => {
  return {
    ...state,
    fetching: true,
  };
};

const getMoviesSuccess = (state: MovieState, {data}: MoviesSuccessPayload) => {
  return {
    ...state,
    data,
    fetching: false,
  };
};

const getMoviesFailure = (state: MovieState) => {
  return {
    ...state,
    fetching: false,
  };
};

const searchMovie = (state: MovieState, {text}: SearchMoviePayload) => {
  return {
    ...state,
    textSearch: text,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<any>(INITIAL_STATE, {
  [Types.GET_MOVIES]: getMovies,
  [Types.GET_MOVIES_SUCCESS]: getMoviesSuccess,
  [Types.GET_MOVIES_FAILURE]: getMoviesFailure,
  [Types.SEARCH_MOVIE]: searchMovie,
});
