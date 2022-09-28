/** @format */

import { takeEvery } from "redux-saga/effects";
import signUpRequest from "./handlers";
import { SIGN_UP_REQUEST } from "./slice";

export default function* userWatcher() {
  yield takeEvery(SIGN_UP_REQUEST.type, signUpRequest);
}
