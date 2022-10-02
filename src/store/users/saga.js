/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  getUserInfo,
  login,
  logout,
  register,
  updateUserInfo,
  updateUserPassword,
} from "./handlers";
import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGN_UP_REQUEST,
  UPDATE_USER_PASS_REQUEST,
  UPDATE_USER_REQUEST,
} from "./slice";

export default function* userWatcher() {
  yield takeLatest(SIGN_UP_REQUEST.type, register);
  yield takeLatest(LOGIN_REQUEST.type, login);
  yield takeLatest(LOGOUT_REQUEST.type, logout);
  yield takeLatest(GET_USER_REQUEST.type, getUserInfo);
  yield takeLatest(UPDATE_USER_REQUEST.type, updateUserInfo);
  yield takeLatest(UPDATE_USER_PASS_REQUEST.type, updateUserPassword);
}
