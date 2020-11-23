import { createSlice } from "@reduxjs/toolkit";

const initState = {
  posts:"Awesome Post"
};

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