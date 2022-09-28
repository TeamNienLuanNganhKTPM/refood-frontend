/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    success: false,
    message: "",
    access_token: null,
    customer_info: {},
    error: false,
    isLogout: false,
  },
  reducers: {
    SIGN_UP_REQUEST: (state, { payload }) => ({
      ...state,
      success: false,
      customer_info: payload,
    }),
    SIGN_UP_SUCCESS: (state, { payload }) => ({
      ...state,
      success: true,
      error: false,
      message: payload.message,
      customer_info: payload.customer_info,
    }),
    SIGN_UP_FAILURE: (state, { payload }) => ({
      ...state,
      success: false,
      message: payload.message,
      customer_info: {},
      error: true,
    }),
    LOGIN_REQUEST: (state, { payload }) => ({
      ...state,
      success: false,
      customer_info: payload,
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
    }),
    LOGOUT_SUCCESS: (state) => ({
      ...state,
      isLogout: true,
      success: false,
      message: "",
      access_token: null,
      customer_info: {},
      error: false,
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
} = userSlice.actions;

export default userSlice.reducer;
