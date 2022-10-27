/** @format */

const { createOrderApi, vnPayOrderApi } = require("api/order");
const { call, put } = require("redux-saga/effects");
const { updateOrderFood, getUrlPay } = require("./slice");

function* handleCreateOrderFood({ payload }) {
  try {
    const response = yield call(createOrderApi, payload);
    if (response.status === 200) {
      yield put(updateOrderFood(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleVNPayOrder({ payload }) {
  try {
    const response = yield call(vnPayOrderApi, payload);
    if (response.status === 200) {
      yield put(getUrlPay(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export { handleCreateOrderFood, handleVNPayOrder };
