/** @format */

const {
  createOrderApi,
  vnPayOrderApi,
  getAllOrderApi,
  getOrderDetailApi,
} = require("api/order");
const { call, put } = require("redux-saga/effects");
const {
  updateOrderInfoFood,
  getUrlPay,
  updateOrderFood,
  updateOrderDetail,
} = require("./slice");

function* handleCreateOrderFood({ payload }) {
  try {
    const response = yield call(createOrderApi, payload);
    if (response.status === 200) {
      yield put(updateOrderInfoFood(response.data));
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

function* handleGetAllOrderFood({ payload }) {
  try {
    const response = yield call(getAllOrderApi, payload);
    if (response.status === 200) {
      yield put(updateOrderFood(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetOrderDetail({ payload }) {
  try {
    const response = yield call(getOrderDetailApi, payload);
    if (response.status === 200) {
      yield put(updateOrderDetail(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export {
  handleCreateOrderFood,
  handleVNPayOrder,
  handleGetAllOrderFood,
  handleGetOrderDetail,
};
