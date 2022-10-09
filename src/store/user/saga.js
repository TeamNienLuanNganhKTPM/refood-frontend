/** @format */

import { takeLatest } from "redux-saga/effects";
import { login, logout, register } from "./handlers";
import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGN_UP_REQUEST } from "./slice";

export default function* userWatcher() {
  yield takeLatest(SIGN_UP_REQUEST.type, register);
  yield takeLatest(LOGIN_REQUEST.type, login);
  yield takeLatest(LOGOUT_REQUEST.type, logout);
}
