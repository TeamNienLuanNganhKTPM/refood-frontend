/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authRegister: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authUpdateUser: (state, { payload }) => ({
      ...state,
      user: payload.customer_info,
      accessToken: payload.access_token,
    }),
    authLogOut: (state, action) => ({}),
  },
});

export const { authLogin, authRegister, authUpdateUser, authLogOut } =
  authSlice.actions;

export default authSlice.reducer;
