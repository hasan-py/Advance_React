import React from 'react'

class PostForm extends React.Component {

	state = {
		name:'',
		email:'',
		password:'',
		bio:'',
		country:'',
		agree:false
	}

	changeHandler = (e)=> {

		this.setState({
			[e.target.name]: e.target.value

		})
	}
	

	handleSubmit = (e)=> {
		e.preventDefault()
		console.log(this.state)
		e.target.reset()
		this.setState({
			name:'',
			email:'',
			password:'',
			bio:'',
			country:'',
			agree:false

		})

	}

	render(){
		let {name,email,password,bio} = this.state

		return (
			<div className="container">
				
				<div className="card align-center row">

				    <form onSubmit={this.handleSubmit} style={{ marginTop:"50px",marginBottom:"50px" }} className="offset-s3 col s9">
				      <div className="row">
				        <div className="input-field col l9 s9">
				          <input name="name"  id="name" type="text" className="validate input-field" onChange={this.changeHandler} value={name} />
				          <label htmlFor="name">Name</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col l9 s9">
				          <input name="password"  id="password" type="password" className="validate" onChange={this.changeHandler} value={password} />
				          <label htmlFor="password">Password</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="input-field col l9 s9">
				          <input name="email" id="email" type="email" className="validate" onChange={this.changeHandler} value={email}  />
				          <label htmlFor="email">Email</label>
				        </div>
				      </div>
				      <div className="row">
				        <div className="col l9 s9">				    
				          <div className="input-field">
				         	 <textarea name="bio" id="bio" className="materialize-textarea" onChange={this.changeHandler} value={bio} ></textarea>
				            <label htmlFor="bio">Bio</label>
				          </div>
				        </div>
				      </div>
						
				      <div className="row">
				        <div className="col l9 s9">				    				          
				      			<button class="waves-effect waves-light btn green lighten-1" >Submit</button>				    
				      	</div>
				      </div>
				    </form>

				   
			  </div>
			</div>
		)
	}
}

export default PostForm