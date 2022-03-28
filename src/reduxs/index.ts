import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import RootReducer from './reducer/rootReducer';
import {SuperheroState} from './reducer/SuperheroReducer/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['superhero'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export interface RootState {
  superhero: SuperheroState;
}

export default store;
