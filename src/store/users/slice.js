/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    inPromise: false,
    error: {},
  },
  reducers: {
    SIGN_UP_REQUEST: (state, { payload }) => ({
      ...state,
      ...payload,
      inPromise: true,
    }),
    SIGN_UP_SUCCESS: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    SIGN_UP_FAILURE: (state, { payload }) => ({
      error: payload,
    }),
  },
});
export const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } =
  userSlice.actions;
export default userSlice.reducer;
