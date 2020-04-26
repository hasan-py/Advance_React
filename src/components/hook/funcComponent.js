import React from 'react'
import {useState} from 'react'

const Demo = ()=> {
	
	const [state,setState] = useState({
		country:"Bangladesh",
		bd:true
	})
	
	const btnHandller = ()=> {
		if (state.bd === true){
		setState({
			country:"America",
			bd:false
			})
		}
		else{
			setState({country:"Bangladesh",bd:true})
		}
	}

	return(
		<div className="card">
			Hey this is Hook by {state.country}
			<button onClick={btnHandller} type="button" class="btn btn-dark">Dark</button>

		</div>
	)
}


export default Demo