import { connect } from 'react-redux'
import React from 'react';

const CountBtn = (props) => {
  return (
    <div>
    	<button onClick={()=> props.add() } type="button" className="btn btn-dark m-2">+ Add</button>
    	<button onClick={()=> props.sub() } type="button" className="btn btn-dark m-2">- Sub</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
	return{
		add: ()=> {
			dispatch({type:'ADD'})
		},
		sub:()=> {
			dispatch({type:'SUB'})
		}
	}
}


export default connect(null,mapDispatchToProps)(CountBtn);