import {all, takeLatest, spawn, put, call} from 'redux-saga/effects';
import {ApiResponse} from 'apisauce';
import {Superhero} from '../types/superhero';
import SuperheroActions, {
  SuperheroTypes,
} from '../reduxs/reducer/SuperheroReducer';
import api from '../services';
import {UtilHelper} from '../utils';

function* getSuperheroes() {
  const response: ApiResponse<Superhero[]> = yield call(api.getDcSuperheroes);

  if (!response.ok) {
    yield put(SuperheroActions.getSuperheroesFailure());
    return;
  }

  yield put(
    SuperheroActions.getSuperheroesSuccess(
      UtilHelper.transformSuperheroListAbleToSearch(response.data),
    ),
  );
}

export default function* rootSaga() {
  const sagas = [takeLatest(SuperheroTypes.GET_SUPERHEROES, getSuperheroes)];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        try {
          yield saga;
        } catch (error) {
          console.log('error in children saga', error);
        }
      }),
    ),
  );
}
