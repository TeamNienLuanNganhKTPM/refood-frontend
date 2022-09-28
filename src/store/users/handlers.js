/** @format */

import { signUp } from "api/user";
import { call, put } from "redux-saga/effects";
import { SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "./slice";

export default function* signUpRequest({ payload }) {
  try {
    const response = yield call(signUp, payload);
    console.log("function*signUpRequest ~ response", response);
    yield put(SIGN_UP_SUCCESS(response.data));
  } catch (error) {
    const { data } = error.response;
    yield put(SIGN_UP_FAILURE(data));
  }
}
