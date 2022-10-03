/** @format */

import userSlice from "./users/slice";
import foodSlice from "./food/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  user: userSlice,
  food: foodSlice,
});
