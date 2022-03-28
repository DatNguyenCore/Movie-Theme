/* eslint-disable global-require */
import {combineReducers} from 'redux';

export interface RootState {}

const rootReducers = combineReducers<RootState>({
  movie: require('./MovieReducer').reducer,
});

export default rootReducers;
