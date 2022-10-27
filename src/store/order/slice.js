/** @format */

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    createOrderFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateOrderFood: (state, { payload }) => ({
      ...state,
      message: payload.message,
      orderInfo: payload.order_info,
    }),
    initOrder: (state) => ({
      orderInfo: null,
      message: null,
    }),
    getVNPAYOrder: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    getUrlPay: (state, { payload }) => ({
      ...state,
      url: payload.url,
    }),
  },
});

export const {
  createOrderFood,
  updateOrderFood,
  initOrder,
  getVNPAYOrder,
  getUrlPay,
} = orderSlice.actions;

export default orderSlice.reducer;
