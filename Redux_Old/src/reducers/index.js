import { combineReducers } from "redux"
import CounterReducer from './CounterReducer'
import UserReducer from './UserReducer'

const AllReducer = combineReducers({
	CounterReducer,
	UserReducer
})

export default AllReducer