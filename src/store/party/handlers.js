/** @format */

import { createPartyApi, findPartyAllApi, findPartyFoodApi } from "api/party";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { checkPartySuccess, updateSearchParty } from "./slice";

/** @format */
function* handlePartyAll() {
  try {
    const response = yield call(findPartyAllApi);
    if (response.status === 200) {
      const { foodByRation } = response.data;
      yield put(updateSearchParty(foodByRation));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handlePartyType({ payload }) {
  try {
    const response = yield call(findPartyFoodApi, payload);
    if (response.status === 200) {
      const { foodByType } = response.data;
      yield put(updateSearchParty(foodByType));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleCreateParty({ payload }) {
  try {
    const response = yield call(createPartyApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      yield put(checkPartySuccess(response.data.success));
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

export { handlePartyType, handlePartyAll, handleCreateParty };
