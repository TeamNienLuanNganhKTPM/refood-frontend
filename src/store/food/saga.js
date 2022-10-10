/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetFoodDetail,
  handleGetAllFoods,
  handleSearchFoodToKey,
  handleSearchNameFood,
  handleGetCommentDetails,
} from "./handlers";
import {
  getAllFood,
  getCommentDetails,
  getFoodDetails,
  searchFood,
} from "./slice";

export default function* foodWatcher() {
  yield takeLatest(getAllFood.type, handleGetAllFoods);
  yield takeLatest(searchFood.type, handleSearchNameFood);
  yield takeLatest(searchFood.type, handleSearchFoodToKey);
  yield takeLatest(getFoodDetails.type, handleGetFoodDetail);
  yield takeLatest(getCommentDetails.type, handleGetCommentDetails);
}
