/** @format */

const { getAllFoodApi, findFoodApi } = require("api/food");
const { call, put } = require("redux-saga/effects");
const {
  GET_ALL_FOOD_FAILURE,
  GET_ALL_FOOD_SUCCESS,
  SEARCH_FOOD_FAILURE,
  SEARCH_FOOD_SUCCESS,
} = require("./slice");

function* getAllFood() {
  try {
    const response = yield call(getAllFoodApi);
    if (response.status === 200) {
      yield put(GET_ALL_FOOD_SUCCESS(response.data.foods));
    } else {
      yield put(GET_ALL_FOOD_FAILURE(response.data.message));
    }
  } catch (error) {
    const { message } = error.response.data;
    yield put(GET_ALL_FOOD_FAILURE(message));
  }
}

function* searchFood({ payload }) {
  const { name, values } = payload;
  try {
    const response = yield call(findFoodApi, name, values);
    const { foodByName, foodByPrices, foodByRation, foodByReview, foodByType } =
      response.data;
    const foods = foodByName.concat(
      foodByPrices,
      foodByRation,
      foodByReview,
      foodByType
    );
    if (response.status === 200) {
      yield put(SEARCH_FOOD_SUCCESS(foods));
    } else {
      yield put(SEARCH_FOOD_FAILURE(response.data.message));
    }
  } catch (error) {
    const { message } = error.response.data;
    yield put(SEARCH_FOOD_FAILURE(message));
  }
}

export { getAllFood, searchFood };
