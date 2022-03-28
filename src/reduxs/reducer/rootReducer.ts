import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  movie: require('./MovieReducer').reducer,
});

export default rootReducers;
