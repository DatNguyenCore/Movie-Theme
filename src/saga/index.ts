import {all} from 'redux-saga/effects';
import SuperheroSaga from './SuperheroSaga';

export default function* rootSaga() {
  yield all([SuperheroSaga()]);
}
