import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import User from './Components/User'
import Counter from './Components/Counter'

const App = () => {
    
	const count = useSelector(state => state.CounterReducer)
	const users = useSelector(state => state.UserReducer)
	const dispatch = useDispatch()
		
  return (
    <div className="container m-5">
    	<h2>Counter</h2>
    	<button onClick={()=> dispatch({type:"INCREMENT"})} type="button" class="btn btn-dark mx-3">+</button>
    	{count}
    	<button onClick={()=> dispatch({type:"DECREMENT"})} type="button" class="btn btn-dark mx-3">-</button>
    	<hr/>
    	<User/>
    	<hr/>
    	<h3>Anouther Component</h3>
		<Counter/>
    </div>
  )
}

export default App;

