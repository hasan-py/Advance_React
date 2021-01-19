/*
    For using Redux all state and changeing them, we need to know 4 step
    1. useSelector, useDispatch
    2. Import The SliceReducer from that particuler slice like => import postReducerSlice from '../redux/PostSlice'
    3. Distructure Actions and Name it what you want for use. like => const { actions:postSlice } = postReducerSlice
    4. Then => dispatch(postSlice.yourFunction(your payload))
*/

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import postReducerSlice from "../redux/PostSlice";
import homeReducerSlice from "../redux/HomeSlice";

const { actions: postSlice } = postReducerSlice;
const { actions: homeSlice } = homeReducerSlice;

const AnotherHome = () => {
  const dispatch = useDispatch();

  const helperAction = (post, name) => {
    console.log("Click Button");
    dispatch(postSlice.SetPosts(post));
    dispatch(homeSlice.SetUser(name));
  };

  return (
    <div className="container">
      <button
        onClick={(e) =>
          helperAction("Change Request From Home", "Posted by Emon")
        }
      >
        Change From Home Pages
      </button>
    </div>
  );
};

const Home = (props) => {
  // get Post data from store
  const postData = useSelector((state) => state.postReducer);

  // get User data from store
  const userData = useSelector((state) => state.homeReducer);

  return (
    <div className="container">
      <h1 className="text-center">Home</h1>
      <p>{postData.posts}</p>
      <p>{userData.user}</p>
      <AnotherHome />
    </div>
  );
};

export default Home;
