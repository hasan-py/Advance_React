import React from 'react'

const Post = (props)=> {
	return(
		<div className="container">
			<h2 className="align-center">{this.props.post.title}</h2>
			<p className="align-center">{this.props.post.body}</p>
		</div>
	)
}

export default Post