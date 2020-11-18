const {createStore,applyMiddleware} = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState = {
	loading:false,
	users:[],
	error:""
}

const userRequest = ()=>{
	return {
		type:"R",
	}
}

const requestSuccess = (users)=>{
	return {
		type:"S",
		payload:users
	}
}

const errorRequest = (error)=>{
	return {
		type:"S",
		payload:error
	}
}

const reducer =(state=initialState,action)=> {
	switch(action.type){
		case "R":
			return {
				...state,
				loading:true
			}
		case "S":
			return{
				loading:false,
				users:action.payload,
				error:""
			}
		case "E":
			return{
				loading:false,
				users:[],
				error:action.payload
			}
		return state
	}
}

const fetchUser = (dispatch)=> {
	return (dispatch)=>{
		dispatch(userRequest)
		axios.get("https://jsonplaceholder.typicode.com/users")
		.then(res=>{
			const users = res.data.map((user)=>user.name)
			dispatch(requestSuccess(users))
		})
		.catch(err=>{
			dispatch(errorRequest)
		})
	}
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
console.log(store.getState())
store.subscribe(()=>{
	console.log(store.getState())
})
store.dispatch(fetchUser())
