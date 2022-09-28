/** @format */

import userSlice from "./users/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  user: userSlice,
});
