import { createStore, combineReducers } from "redux"
import TodosReducers from './TodosReducers';
import TotalTodosReducers from './TotalTodosReducers';

const AllReducer = combineReducers({
	TodosReducers,
	TotalTodosReducers
})

const Store = createStore(AllReducer)

export default Store