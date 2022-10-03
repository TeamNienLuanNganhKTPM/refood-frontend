/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: null,
    customer_info: {},
    error: false,
  },
  reducers: {
    SIGN_UP_REQUEST: (state) => ({
      ...state,
      success: false,
      isSignUp: false,
      error: false,
    }),
    SIGN_UP_SUCCESS: (state, { payload }) => ({
      ...state,
      success: true,
      isSignUp: false,
      message: payload.message,
      customer_info: payload.customer_info,
      error: false,
    }),
    SIGN_UP_FAILURE: (state, { payload }) => ({
      ...state,
      success: false,
      message: payload.message,
      customer_info: {},
      isSignUp: true,
      error: true,
    }),
    LOGIN_REQUEST: (state) => ({
      ...state,
      success: false,
      error: false,
    }),
    LOGIN_SUCCESS: (state, { payload }) => ({
      ...state,
      error: false,
      success: payload.success,
      message: payload.message,
      access_token: payload.access_token,
      customer_info: payload.customer_info,
    }),
    LOGIN_FAILURE: (state, { payload }) => ({
      ...state,
      success: false,
      message: payload.message,
      access_token: null,
      customer_info: {},
      error: true,
    }),
    LOGOUT_REQUEST: (state) => ({
      ...state,
      error: false,
      success: false,
    }),
    LOGOUT_SUCCESS: (state) => ({
      ...state,
      success: false,
      message: "",
      access_token: null,
      customer_info: {},
      error: false,
    }),
    LOGOUT_FAILURE: (state, { payload }) => ({
      ...state,
      message: payload.message,
      error: true,
    }),
  },
});

export const {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = userSlice.actions;

export default userSlice.reducer;
