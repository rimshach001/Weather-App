

// import { createStore, combineReducers } from 'redux';
// import Reducer from './../Reducer';

// const rootReducer = combineReducers({
//   data: Reducer,
// });

// const store = createStore(rootReducer);

// export { store };


// store.js
import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../Saga/Saga';
import Reducer from '../Reducer/Reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  data: Reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  );
  
  sagaMiddleware.run(mySaga);
  
export default store;


  // import { composeWithDevTools } from 'redux-devtools-extension'; // Import the DevTools extension

// composeWithDevTools(applyMiddleware(sagaMiddleware)) // Use composeWithDevTools