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
    isSignUp: false,
    isUpdate: false,
    isPass: false,
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
    GET_USER_REQUEST: (state) => ({
      ...state,
      error: false,
      isUpdate: false,
      success: false,
    }),
    GET_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      customer_info: payload.customer_info,
      success: payload.success,
      error: false,
    }),
    GET_USER_FAILURE: (state, { payload }) => ({
      ...state,
      message: payload.message,
      success: payload.success,
      error: true,
    }),
    UPDATE_USER_REQUEST: (state) => ({
      ...state,
      isUpdate: false,
      error: false,
    }),
    UPDATE_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      isUpdate: payload.success,
      message: payload.message,
      error: false,
    }),
    UPDATE_USER_FAILURE: (state, { payload }) => ({
      ...state,
      isUpdate: false,
      message: payload.message,
      error: true,
    }),
    UPDATE_USER_PASS_REQUEST: (state) => ({
      ...state,
      isPass: false,
      error: false,
    }),
    UPDATE_USER_PASS_SUCCESS: (state, { payload }) => ({
      ...state,
      isPass: payload.success,
      message: payload.message,
      error: false,
    }),
    UPDATE_USER_PASS_FAILURE: (state, { payload }) => ({
      ...state,
      isPass: payload.success,
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
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_PASS_REQUEST,
  UPDATE_USER_PASS_SUCCESS,
  UPDATE_USER_PASS_FAILURE,
} = userSlice.actions;

export default userSlice.reducer;
