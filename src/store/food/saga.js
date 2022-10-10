/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  getFoodDetail,
  handleGetAllFoods,
  handleSearchFoodToKey,
  handleSearchNameFood,
} from "./handlers";
import { getAllFood, getFoodDetails, searchFood } from "./slice";

export default function* foodWatcher() {
  yield takeLatest(getAllFood.type, handleGetAllFoods);
  yield takeLatest(searchFood.type, handleSearchNameFood);
  yield takeLatest(searchFood.type, handleSearchFoodToKey);
  yield takeLatest(getFoodDetails.type, getFoodDetail);
}
