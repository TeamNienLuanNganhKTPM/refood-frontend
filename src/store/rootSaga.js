/** @format */

import { all, fork } from "redux-saga/effects";
import userWatcher from "./users/saga";

export default function* rootSaga() {
  yield all([fork(userWatcher)]);
}
