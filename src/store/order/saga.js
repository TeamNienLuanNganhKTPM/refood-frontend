/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleCreateOrderFood,
  handleGetAllOrderFood,
  handleVNPayOrder,
} from "./handlers";
import { createOrderFood, getAllOrderFood, getVNPAYOrder } from "./slice";

export default function* orderWatcher() {
  yield takeLatest(createOrderFood.type, handleCreateOrderFood);
  yield takeLatest(getVNPAYOrder.type, handleVNPayOrder);
  yield takeLatest(getAllOrderFood.type, handleGetAllOrderFood);
}
