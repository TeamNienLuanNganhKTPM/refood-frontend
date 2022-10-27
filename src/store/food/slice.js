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
    getAllFoodPagination: (state) => ({
      ...state,
      foods: [],
    }),
    updateAllFoodPagination: (state, { payload }) => ({
      ...state,
      foods: payload.foods,
      countOnPage: payload.countOnPage,
      pageCurrent: payload.pageCur,
      pageNumber: payload.pageNum,
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
    getAllTypesFood: (state) => ({
      ...state,
    }),
    updateTypesFood: (state, { payload }) => ({
      ...state,
      typesFood: payload,
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
  getAllFoodPagination,
  updateAllFoodPagination,
  getAllTypesFood,
  updateTypesFood,
} = foodSlice.actions;

export default foodSlice.reducer;
