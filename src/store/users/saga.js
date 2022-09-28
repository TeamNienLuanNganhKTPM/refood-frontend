/** @format */

import { takeEvery } from "redux-saga/effects";
import { login, logout, register } from "./handlers";
import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST } from "./slice";

export default function* userWatcher() {
  yield takeEvery(SIGN_UP_REQUEST.type, register);
  yield takeEvery(LOGIN_REQUEST.type, login);
  yield takeEvery(LOGOUT_REQUEST.type, logout);
}
