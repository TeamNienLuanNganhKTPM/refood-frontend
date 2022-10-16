/** @format */

import authSlice from "./auth/slice";
import foodSlice from "./food/slice";
import cartSlice from "./cart/slice";
import searchSlice from "./search/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authSlice,
  food: foodSlice,
  cart: cartSlice,
  search: searchSlice,
});
