import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import homeReducerSlice from './HomeSlice'
import postReducerSlice from './PostSlice'

// Important Fact is When We will use Slice Reducer we need to use slicename.reducer Like => homeReducerSlice.reducer
const reducer = combineReducers({
    homeReducer: homeReducerSlice.reducer,
    postReducer: postReducerSlice.reducer,
})

const Store = configureStore({
    reducer,
})

export default Store;