/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetAllFoods,
  handleSearchFoodToKey,
  handleSearchNameFood,
} from "./handlers";
import { getAllFood, searchFood } from "./slice";

export default function* foodWatcher() {
  yield takeLatest(getAllFood.type, handleGetAllFoods);
  yield takeLatest(searchFood.type, handleSearchNameFood);
  yield takeLatest(searchFood.type, handleSearchFoodToKey);
}
