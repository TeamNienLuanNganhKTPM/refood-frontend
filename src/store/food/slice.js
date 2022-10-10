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
    getFoodDetails: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateFoodDetails: (state, { payload }) => ({
      foodDetails: payload,
    }),
  },
});

export const {
  getAllFood,
  updateAllFood,
  searchFood,
  getFoodDetails,
  updateFoodDetails,
} = foodSlice.actions;

export default foodSlice.reducer;
