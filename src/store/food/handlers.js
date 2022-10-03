/** @format */

const { getAllFoodApi } = require("api/food");
const { call, put } = require("redux-saga/effects");
const { GET_ALL_FOOD_FAILURE, GET_ALL_FOOD_SUCCESS } = require("./slice");

function* getAllFood() {
  const response = yield call(getAllFoodApi);
  if (response.status === 200) {
    yield put(GET_ALL_FOOD_SUCCESS(response.data.foods));
  } else {
    yield put(GET_ALL_FOOD_FAILURE(response.data.message));
  }
  try {
  } catch (error) {
    const { message } = error.response.data;
    yield put(GET_ALL_FOOD_FAILURE(message));
  }
}

export { getAllFood };
