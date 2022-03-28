import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  superhero: require('./SuperheroReducer').reducer,
});

export default rootReducers;
