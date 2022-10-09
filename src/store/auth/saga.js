/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleAuthLogin, handleAuthRegister, logOut } from "./handlers";
import { authLogin, authLogOut, authRegister } from "./slice";

export default function* authWatcher() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authLogOut.type, logOut);
}
