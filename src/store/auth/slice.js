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
    authGetUser: (state) => ({
      ...state,
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
    authUpdateAddressInfo: (state, { payload }) => {
      return {
        ...state,
        addressInfo: payload,
      };
    },
    authUpdateAddress: (state, { payload }) => {
      let result = [];
      if (payload.length > 0) {
        payload.map((item) => {
          return result.push(item);
        });
      }
      return {
        ...state,
        addresses: result,
      };
    },
    updateAddress: (state) => ({
      ...state,
    }),
  },
});

export const {
  authLogin,
  authRegister,
  authGetUser,
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
