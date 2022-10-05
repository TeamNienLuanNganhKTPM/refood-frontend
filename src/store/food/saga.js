/** @format */

import { takeEvery } from "redux-saga/effects";
import { getAllFood, searchFood } from "./handlers";
import { GET_ALL_FOOD_REQUEST, SEARCH_FOOD_REQUEST } from "./slice";

export default function* foodWatcher() {
  yield takeEvery(GET_ALL_FOOD_REQUEST.type, getAllFood);
  yield takeEvery(SEARCH_FOOD_REQUEST.type, searchFood);
}
