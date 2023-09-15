import {applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherSaga from '../Saga';
import Reducer from '../Reducer/Reducer';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  data: Reducer,
});

const store = configureStore({
  reducer:rootReducer,
  middleware:[sagaMiddleware]
});
  
  sagaMiddleware.run(weatherSaga);
  
export default store;
