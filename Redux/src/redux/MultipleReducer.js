const InitialState = {
	multi:10
}

const MultipleReducer = (state=InitialState,action)=>{
	switch(action.type){
		case "multi":
			return{
				...state,
				multi:action.payload
			}
		default:return state
	}
}

export default MultipleReducer