import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Get extends Component {

	change(){
		let container = document.getElementById('h1')
		let element = <h2>HEy this is from dom</h2>
		

		ReactDOM.render(element,container)
	}

	render() {
		return (
			<div>
				<h1 id="h1">Hey</h1>
				<button id="btn" onClick={this.change} type="button" class="btn btn-dark">Dark</button>
			</div>
		);
	}
}

export default Get