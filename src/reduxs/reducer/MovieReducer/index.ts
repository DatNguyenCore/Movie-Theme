import {createReducer, createActions, DefaultActionTypes} from 'reduxsauce';
import Immutable from 'seamless-immutable';

// =========== Create State ===========
const INITIAL_STATE = Immutable<any>({
  data: [],
});

// =========== Create Action ===========
export interface MovieActionTypes extends DefaultActionTypes {
  GET_MOVIES: 'GET_MOVIES';
  GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS';
}

const {Types, Creators} = createActions<any, any>({
  getMovies: [],
  getMoviesSuccess: ['data'],
});

export const MovieTypes = Types;
export default Creators;

const getMovies = (state: any) => {
  return {
    ...state,
  };
};

const getMoviesSuccess = (state: any, {data}: {data: any[]}) => {
  return {
    ...state,
    data,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<any, any>(INITIAL_STATE, {
  [Types.GET_MOVIES]: getMovies,
  [Types.GET_MOVIES_SUCCESS]: getMoviesSuccess,
});
