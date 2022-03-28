import {all, takeLatest, spawn, put, call} from 'redux-saga/effects';
import {ApiResponse} from 'apisauce';
import {Movie} from '../types/movie';
import MovieActions, {MovieTypes} from '../reduxs/reducer/MovieReducer';
import api from '../services';

function* getMovies() {
  const response: ApiResponse<Movie> = yield call(api.getDcSuperheroes);

  if (!response.ok) {
    yield put(MovieActions.getMoviesFailure());
    return;
  }

  yield put(MovieActions.getMoviesSuccess(response.data));
}

export default function* rootSaga() {
  const sagas = [takeLatest(MovieTypes.GET_MOVIES, getMovies)];

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
