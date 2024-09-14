// import createslice

// slice is used to encapsulate the logic
// slice contains initial state, reducer and actioncreator

// reducer is used in Redux for managing state

import { createSlice } from "@reduxjs/toolkit";

// define initialState
const initialState = {
  signupData: null,
  loading: false,
  // agr token null hai to signup or ligin ka button dikhao varna profile dropdown dikhao
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;