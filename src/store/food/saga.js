/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetFoodDetail,
  handleGetAllFoods,
  handleGetCommentDetails,
  handleAddCommentDetails,
  handleDeleteComment,
  handleGetAllFoodPagination,
  handleGetAllTypesFood,
} from "./handlers";
import {
  addCommentDetails,
  deleteComment,
  getAllFood,
  getAllFoodPagination,
  getAllTypesFood,
  getCommentDetails,
  getFoodDetails,
} from "./slice";

export default function* foodWatcher() {
  yield takeLatest(getAllFood.type, handleGetAllFoods);
  yield takeLatest(getFoodDetails.type, handleGetFoodDetail);
  yield takeLatest(getCommentDetails.type, handleGetCommentDetails);
  yield takeLatest(addCommentDetails.type, handleAddCommentDetails);
  yield takeLatest(deleteComment.type, handleDeleteComment);
  yield takeLatest(getAllFoodPagination.type, handleGetAllFoodPagination);
  yield takeLatest(getAllTypesFood.type, handleGetAllTypesFood);
}
