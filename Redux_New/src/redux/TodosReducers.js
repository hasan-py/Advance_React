const InitialState = {
	todos:[],
	edit:false,
}

const TodosReducers = (state=InitialState,action)=>{
	switch(action.type){
		case "add":
			return{
				...state,
				todos:[...state.todos, action.payload]
			}
		default:return state
	}
}

export default TodosReducers