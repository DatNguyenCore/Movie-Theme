import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  SuperheroState,
  SuperheroSuccessPayload,
  SearchSuperheroPayload,
} from './types';

// =========== Create State ===========
const INITIAL_STATE = Immutable<SuperheroState>({
  data: [],
  fetching: false,
  textSearch: '',
});

// =========== Create Action ===========
export interface SuperheroActionTypes {
  GET_SUPERHEROES: 'GET_SUPERHEROES';
  GET_SUPERHEROES_SUCCESS: 'GET_SUPERHEROES_SUCCESS';
  GET_SUPERHEROES_FAILURE: 'GET_SUPERHEROES_FAILURE';
  SEARCH_SUPERHERO: 'SEARCH_SUPERHERO';
}

const {Types, Creators} = createActions({
  getSuperheroes: [],
  getSuperheroesSuccess: ['data'],
  getSuperheroesFailure: [],
  searchSuperhero: ['text'],
});

export const SuperheroTypes = Types;
export default Creators;

const getSuperheroes = (state: SuperheroState) => {
  return {
    ...state,
    fetching: true,
  };
};

const getSuperheroesSuccess = (
  state: SuperheroState,
  {data}: SuperheroSuccessPayload,
) => {
  return {
    ...state,
    data,
    fetching: false,
  };
};

const getSuperheroesFailure = (state: SuperheroState) => {
  return {
    ...state,
    fetching: false,
  };
};

const searchSuperhero = (
  state: SuperheroState,
  {text}: SearchSuperheroPayload,
) => {
  return {
    ...state,
    textSearch: text,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<any>(INITIAL_STATE, {
  [Types.GET_SUPERHEROES]: getSuperheroes,
  [Types.GET_SUPERHEROES_SUCCESS]: getSuperheroesSuccess,
  [Types.GET_SUPERHEROES_FAILURE]: getSuperheroesFailure,
  [Types.SEARCH_SUPERHERO]: searchSuperhero,
});
