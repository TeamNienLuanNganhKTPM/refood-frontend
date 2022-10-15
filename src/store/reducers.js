/** @format */

import authSlice from "./auth/slice";
import foodSlice from "./food/slice";
import cartSlice from "./cart/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authSlice,
  food: foodSlice,
  cart: cartSlice,
});
