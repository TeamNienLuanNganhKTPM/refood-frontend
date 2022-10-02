/** @format */

import { takeEvery } from "redux-saga/effects";
import {
  getUserInfo,
  login,
  logout,
  register,
  updateUserInfo,
} from "./handlers";
import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGN_UP_REQUEST,
  UPDATE_USER_REQUEST,
} from "./slice";

export default function* userWatcher() {
  yield takeEvery(SIGN_UP_REQUEST.type, register);
  yield takeEvery(LOGIN_REQUEST.type, login);
  yield takeEvery(LOGOUT_REQUEST.type, logout);
  yield takeEvery(GET_USER_REQUEST.type, getUserInfo);
  yield takeEvery(UPDATE_USER_REQUEST.type, updateUserInfo);
}
