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
    authGetAllAddress: (state) => ({
      ...state,
    }),
    authAddAddress: (state) => ({
      ...state,
    }),
    authGetAddressDetail: (state, { payload }) => ({
      ...state,
    }),
    authUpdateAddressInfo: (state, { payload }) => ({
      ...state,
      addressInfo: payload,
    }),
    authUpdateAddress: (state, { payload }) => ({
      ...state,
      addresses: payload,
    }),
    updateAddress: (state) => ({
      ...state,
    }),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authLogOut,
  authGetAllAddress,
  authGetAddressDetail,
  authUpdateAddressInfo,
  authUpdateAddress,
  authAddAddress,
  updateAddress,
} = authSlice.actions;

export default authSlice.reducer;
