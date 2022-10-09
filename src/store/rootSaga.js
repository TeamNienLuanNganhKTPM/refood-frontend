/** @format */

import { all, fork } from "redux-saga/effects";
import foodWatcher from "./food/saga";
import userWatcher from "./user/saga";

export default function* rootSaga() {
  yield all([fork(userWatcher), fork(foodWatcher)]);
}
