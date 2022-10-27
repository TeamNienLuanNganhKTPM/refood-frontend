/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleCreateOrderFood, handleVNPayOrder } from "./handlers";
import { createOrderFood, getVNPAYOrder } from "./slice";

export default function* orderWatcher() {
  yield takeLatest(createOrderFood.type, handleCreateOrderFood);
  yield takeLatest(getVNPAYOrder.type, handleVNPayOrder);
}
