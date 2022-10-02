/** @format */

import { signUpApi, loginApi, getUserApi, updateUserInfoApi } from "api/user";
import { call, put } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
} from "./slice";

function* register({ payload }) {
  console.log("function*register ~ payload", payload);
  const { phonenumber, password } = payload;
  try {
    const response = yield call(signUpApi, payload);
    yield put(SIGN_UP_SUCCESS(response.data));
    yield put(LOGIN_REQUEST({ phonenumber, password }));
  } catch (error) {
    const { data } = error.response;
    yield put(SIGN_UP_FAILURE(data));
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
    const { data } = error.response;
    yield put(LOGIN_FAILURE(data));
  }
}
function* logout() {
  try {
    yield put(LOGOUT_SUCCESS());
    localStorage.clear();
  } catch (error) {
    const { data } = error.response;
    yield put(LOGOUT_FAILURE(data));
  }
}

function* getUserInfo() {
  try {
    const response = yield call(getUserApi);
    if (response?.status === 200) {
      yield put(GET_USER_SUCCESS(response.data));
    } else {
      yield put(GET_USER_FAILURE(response.data));
    }
  } catch (error) {
    const { data } = error.response;
    yield put(GET_USER_FAILURE(data));
  }
}

function* updateUserInfo({ payload }) {
  try {
    const response = yield call(updateUserInfoApi, payload);
    if (response?.status === 200) {
      yield put(UPDATE_USER_SUCCESS(response.data));
    } else {
      yield put(UPDATE_USER_FAILURE(response.data));
    }
  } catch (error) {
    const { data } = error.response;
    yield put(UPDATE_USER_FAILURE(data));
  }
}

export { register, login, logout, getUserInfo, updateUserInfo };
