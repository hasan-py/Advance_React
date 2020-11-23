import { createSlice } from "@reduxjs/toolkit";

const initState = {
  loading: false,
  error: '',
  msg: "",
  user:"Hasan"
};

const homeReducerSlice = createSlice({
  name: "homeReducer",
  initialState: initState,
  reducers: {

    SetUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },

    ChangeLoading: (state, action) => {
      state.loading = action.payload;
    },

    ChangeMsg: (state, action) => {
      state.msg = action.payload;
    },

    ChangeError: (state, action) => {
      state.error = action.payload;
    },

  }
});

export default homeReducerSlice

