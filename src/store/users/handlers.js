/** @format */

import { signUpApi, loginApi } from "api/user";
import { call, put } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGOUT_SUCCESS,
} from "./slice";

function* register({ payload }) {
  try {
    const response = yield call(signUpApi, payload);
    yield put(SIGN_UP_SUCCESS(response.data));
  } catch (error) {
    const { data } = error.response;
    yield put(SIGN_UP_FAILURE(data));
  }
}

function* login({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    console.log("function*login ~ response", response);
    if (response.data.success) {
      yield put(LOGIN_SUCCESS(response.data));
      localStorage.setItem("token", JSON.stringify(response.data.access_token));
    } else {
      yield put(LOGIN_FAILURE(response.data));
    }
  } catch (error) {
    const { data } = error.response;
    yield put(LOGIN_FAILURE(data));
  }
}
function* logout() {
  try {
    yield put(LOGOUT_SUCCESS());
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
}

export { register, login, logout };
