/** @format */

import Swal from "sweetalert2";

const {
  getAllFoodApi,
  findFoodApi,
  getFoodDetailApi,
  getFoodCommentApi,
  addFoodCommentApi,
  deleteFoodCommentApi,
  addCartFoodApi,
  getCartDetailFoodApi,
  deleteCartApi,
  filterFoodApi,
} = require("api/food");
const { call, put } = require("redux-saga/effects");
const {
  updateAllFood,
  updateFoodDetails,
  updateCommentDetails,
} = require("./slice");

function* handleGetAllFoods() {
  try {
    const response = yield call(getAllFoodApi);
    if (response.status === 200) {
      yield put(updateAllFood(response.data.foods));
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleGetFoodDetail({ payload }) {
  try {
    const response = yield call(getFoodDetailApi, payload);
    if (response.status === 200) {
      yield put(updateFoodDetails(response.data.food_info));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetCommentDetails({ payload }) {
  try {
    const response = yield call(getFoodCommentApi, payload);
    if (response.status === 200) {
      yield put(updateCommentDetails(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleAddCommentDetails({ payload }) {
  try {
    const response = yield call(addFoodCommentApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleDeleteComment({ payload }) {
  try {
    const response = yield call(deleteFoodCommentApi, payload);
    Swal.fire({
      position: "center",
      icon: "success",
      text: response.data.message,
      showConfirmButton: false,
      timer: 2000,
    });
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export {
  handleGetAllFoods,
  handleGetFoodDetail,
  handleGetCommentDetails,
  handleAddCommentDetails,
  handleDeleteComment,
};
