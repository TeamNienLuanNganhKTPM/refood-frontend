/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
  },
  reducers: {
    GET_ALL_FOOD_REQUEST: (state) => ({
      ...state,
      success: false,
      error: false,
    }),
    GET_ALL_FOOD_SUCCESS: (state, { payload }) => {
      // state.foods.push(payload);
      return {
        ...state,
        success: true,
        foods: payload,
        error: false,
      };
    },
    GET_ALL_FOOD_FAILURE: () => ({
      success: false,
      error: true,
    }),
    SEARCH_FOOD_REQUEST: (state) => ({
      ...state,
      foods: [],
      error: false,
    }),
    SEARCH_FOOD_SUCCESS: (state, { payload }) => ({
      ...state,
      foods: payload,
      error: false,
    }),
    SEARCH_FOOD_FAILURE: (state) => ({
      ...state,
      error: true,
    }),
  },
});

export const {
  GET_ALL_FOOD_REQUEST,
  GET_ALL_FOOD_SUCCESS,
  GET_ALL_FOOD_FAILURE,
  SEARCH_FOOD_REQUEST,
  SEARCH_FOOD_SUCCESS,
  SEARCH_FOOD_FAILURE,
} = foodSlice.actions;

export default foodSlice.reducer;
