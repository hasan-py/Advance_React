import React from 'react'
import axios from 'axios'
import PostForm from './components/postForm'


class App extends React.Component {
	
	state = {
		posts:[]
	}
	
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res=> this.setState({posts:res.data}))
			.catch(err=> console.log(err))
	}


	render() {
		let {posts} = this.state
		

		if(posts.length === 0){
			return (
				<div style={{textAlign:'center', marginTop:"300px"}}>
					<div class="preloader-wrapper big active">
					    <div class="spinner-layer spinner-blue-only">
					      <div class="circle-clipper left">
					        <div class="circle"></div>
					      </div><div class="gap-patch">
					        <div class="circle"></div>
					      </div><div class="circle-clipper right">
					        <div class="circle"></div>
					      </div>
					    </div>
					  </div>
				</div>
				)
		}else {
			return (
			<div className="App container">
			      <PostForm/>
				 <ul class="collection with-header">
			        <li class="collection-header"><h4>Post Title</h4></li>

					{ posts.map(post=> <li key={post.id} className="collection-item truncate">
							<div>{post.title}</div>
							<span type="button" className="btn btn-small green lighten-1 align-right">Read More</span>
						</li> )}

			      </ul>

			</div>

			)
		}
	}
}

export default App