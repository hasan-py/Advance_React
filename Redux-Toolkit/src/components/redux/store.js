import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import homeReducerSlice from './HomeSlice';
import postReducerSlice from './PostSlice';

const reducer = combineReducers({
  homeReducer:homeReducerSlice.reducer,
  postReducer:postReducerSlice.reducer,
})

const Store = configureStore({
  reducer,
})

export default Store;