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
    }),
    updateAllFood: (state, { payload }) => ({
      ...state,
      foods: payload,
    }),
    getFoodDetails: (state, { payload }) => ({
      ...state,
    }),
    updateFoodDetails: (state, { payload }) => ({
      ...state,
      foodDetails: payload,
    }),
    getCommentDetails: (state, { payload }) => ({
      ...state,
    }),
    updateCommentDetails: (state, { payload }) => ({
      ...state,
      comments: payload.comments,
      countAllComment: payload.countAll,
    }),
    addCommentDetails: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    deleteComment: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {
  getAllFood,
  updateAllFood,
  getFoodDetails,
  updateFoodDetails,
  getCommentDetails,
  updateCommentDetails,
  addCommentDetails,
  deleteComment,
} = foodSlice.actions;

export default foodSlice.reducer;
