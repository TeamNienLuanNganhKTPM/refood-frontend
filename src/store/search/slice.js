/** @format */

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    foods: [],
  },
  reducers: {
    filterSearchFood: (state, { payload }) => ({
      ...state,
    }),
    findSearchFood: (state, { payload }) => ({
      ...state,
    }),
    updateSearchFood: (state, { payload }) => ({
      ...state,
      foods: payload,
    }),
  },
});

export const { filterSearchFood, findSearchFood, updateSearchFood } =
  searchSlice.actions;

export default searchSlice.reducer;
