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
  },
  reducers: {
    SIGN_UP_REQUEST: (state, { payload }) => ({
      ...state,
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
  },
});
export const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } =
  userSlice.actions;
export default userSlice.reducer;
