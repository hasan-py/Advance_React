import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import postReducerSlice from '../redux/PostSlice';
import homeReducerSlice from '../redux/HomeSlice';

const { actions:postSlice } = postReducerSlice
const { actions:homeSlice } = homeReducerSlice

const AnotherPost = ()=> {

	const dispatch = useDispatch()

    const helperAction = (post, name) => {
    	console.log("Click Button");
    	dispatch(postSlice.SetPosts(post))
    	dispatch(homeSlice.SetUser(name))
    }

    return (
        <div className="container">
    		<button onClick={e=> helperAction("Change Req From Post", "Posted by Hasan")}>Change From Post Pages</button>
    	</div>
    )
}


const Posts = (props) => {

    // get Post data from store
    const postData = useSelector((state) => {
        return state.postReducer
    });

    // get User data from store
    const userData = useSelector((state) => {
        return state.homeReducer
    });

    return (
        <div className="container">
    		<h1 className="text-center">Posts</h1>
    		<p>{postData.posts}</p>
    		<p>{userData.user}</p>
    		<AnotherPost/>
    	</div>
    )
}

export default Posts;