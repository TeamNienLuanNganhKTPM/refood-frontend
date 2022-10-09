/** @format */

import { signUpApi, loginApi } from "api/user";
import { call, put } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_REQUEST,
} from "./slice";

function* register({ payload }) {
  console.log("function*register ~ payload", payload);
  const { phonenumber, password } = payload;
  try {
    const response = yield call(signUpApi, payload);
    yield put(SIGN_UP_SUCCESS(response.data));
    yield put(LOGIN_REQUEST({ phonenumber, password }));
  } catch (error) {
    yield put(SIGN_UP_FAILURE(error.response.data));
  }
}

function* login({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    if (response.data.success) {
      yield put(LOGIN_SUCCESS(response.data));
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.customer_info));
    } else {
      yield put(LOGIN_FAILURE(response.data));
    }
  } catch (error) {
    yield put(LOGIN_FAILURE(error.response.data));
  }
}
function* logout() {
  try {
    yield put(LOGOUT_SUCCESS());
    localStorage.clear();
  } catch (error) {
    yield put(LOGOUT_FAILURE(error.response.data));
  }
}

export { register, login, logout };
