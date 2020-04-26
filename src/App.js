import React from 'react'
// import {useState} from 'react'
// import {Fragment} from 'react'
// import ReactDOM from 'react-dom'
import Count from './components/Count'
import CountBtn from './components/CountBtn'

import { Provider } from 'react-redux'
import store from './store'


class App extends React.Component {
	
	render() {

		return(
			<Provider store={store} >
				<div className="App container">
					<h3 className="display-4">React Redux</h3>
					<Count/>
					<CountBtn/>
				</div>
			</Provider> 
		)

	}
}

export default App

//First we need to  Create Reducer
// Then We need to Create Store
// then we'r going to create subscriber
// And then we can ddispatch those thing