import { createSlice } from "@reduxjs/toolkit";
 
const initState = {
  posts:null
};

// Here All of the ruducing function will be in reducers object
const postReducerSlice = createSlice({
  name: "postReducer",
  initialState: initState,
  reducers: {

    SetPosts: (state, action) => {
      const { payload } = action;
      state.posts = payload;
    },

  }
});

export default postReducerSlice