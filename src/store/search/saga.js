/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleSearchFilter, handleSearchFoodAdvanced } from "./handlers";
import { filterSearchFood, findSearchFood } from "./slice";

export default function* searchWatcher() {
  yield takeLatest(filterSearchFood.type, handleSearchFilter);
  yield takeLatest(findSearchFood.type, handleSearchFoodAdvanced);
}
