import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {MovieState} from './types';
import {Movie} from '../../../types/movie';

// =========== Create State ===========
const INITIAL_STATE = Immutable<MovieState>({
  data: [],
  fetching: false,
});

// =========== Create Action ===========
export interface MovieActionTypes {
  GET_MOVIES: 'GET_MOVIES';
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS';
  GET_MOVIES_FAILURE: 'GET_MOVIES_FAILURE';
}

const {Types, Creators} = createActions({
  getMovies: [],
  getMoviesSuccess: ['data'],
  getMoviesFailure: [],
});

export const MovieTypes = Types;
export default Creators;

const getMovies = (state: MovieState) => {
  return {
    ...state,
    fetching: true,
  };
};

const getMoviesSuccess = (state: MovieState, {data}: {data: Movie[]}) => {
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

// =========== Create Reducer ===========
export const reducer = createReducer<any>(INITIAL_STATE, {
  [Types.GET_MOVIES]: getMovies,
  [Types.GET_MOVIES_SUCCESS]: getMoviesSuccess,
  [Types.GET_MOVIES_FAILURE]: getMoviesFailure,
});
