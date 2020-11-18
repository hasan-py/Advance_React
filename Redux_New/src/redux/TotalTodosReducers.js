const InitialState = {
	totalTodos:0
}

const TotalTodosReducers = (state=InitialState,action)=>{
	switch(action.type){
		case "totalTodos":
			return{
				...state,
				totalTodos:action.payload
			}
		default:return state
	}
}

export default TotalTodosReducers