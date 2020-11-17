const {redux,createStore,combineReducers} = require('redux')

const inState = {
	numberOfBooks:10
	
}

const inStateMan = {
	man:null
}

// const action = ()=>{
// 	return {
// 		type:"BUY",
// 		info:"Buy Book Action"
// 	}
// }

const bookReducer = (state=inState,action)=>{
	switch(action.type){
		case "BUY":
			return {
				...state,
				numberOfBooks:state.numberOfBooks-1
			}
		default:
			return state
	}
}

const addReducer = (state=inState,action)=>{
	switch(action.type){
		case "ADD":
			return {
				...state,
				numberOfBooks:state.numberOfBooks+1
			}
		default:
			return state
	}
}

const manReducer = (state=inStateMan,action)=>{
	switch(action.type){
		case "C":
			return {
				...state,
				man:action.payload
			}
		default:
			return state
	}
}

const reducer = combineReducers({bookReducer,addReducer,manReducer})

const man = {
	"t-Shirt":34,
	"Pant":34,
}


const store = createStore(reducer)


console.log("Initials State : ",store.getState())
store.dispatch({type:"BUY"})
console.log("Initials State : ",store.getState())
store.dispatch({type:"ADD"})
console.log("Initials State : ",store.getState())
store.dispatch({type:"C",payload:man})
console.log("Initials State : ",store.getState())