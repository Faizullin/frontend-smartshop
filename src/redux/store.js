//import rootReducer from './reducers';

//const store = createStore(rootReducer);

//export default store;
//import { configureStore } from '@reduxjs/toolkit'


import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';


const middleware = [];

const reducres = combineReducers(
  {
    auth: authReducer,
  }
);

const store = createStore(
  reducres,
  applyMiddleware(thunkMiddleware),
);

export default store;