/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
  },
  reducers: {
    getAllFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateAllFood: (state, { payload }) => ({
      ...state,
      foods: payload,
    }),
    searchFood: (state, { payload }) => ({
      ...state,
      ...payload,
      foods: [],
    }),
  },
});

export const { getAllFood, updateAllFood, searchFood } = foodSlice.actions;

export default foodSlice.reducer;
