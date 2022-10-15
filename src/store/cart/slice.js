/** @format */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state) => ({
      ...state,
    }),
    getCartDetail: (state) => ({
      ...state,
    }),
    updateCart: (state, { payload }) => ({
      ...state,
      cart: payload,
    }),
    updateCartItem: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    deleteCart: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {
  addCart,
  updateCart,
  getCartDetail,
  updateCartItem,
  deleteCart,
} = cartSlice.actions;

export default cartSlice.reducer;
