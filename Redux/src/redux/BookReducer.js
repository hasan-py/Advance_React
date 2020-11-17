const InitialState = {
	numberOfBook:10
}

const BookReducer = (state=InitialState,action)=>{
	switch(action.type){
		case "BUY":
			return{
				...state,
				numberOfBook:state.numberOfBook-1
			}
		default:return state
	}
}

export default BookReducer