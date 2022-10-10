/** @format */

const { getAllFoodApi, findFoodApi, getFoodDetailApi } = require("api/food");
const { call, put } = require("redux-saga/effects");
const { updateAllFood, updateFoodDetails } = require("./slice");

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

function* handleSearchNameFood({ payload }) {
  const response = yield call(findFoodApi, payload);
  const { foodByName } = response.data;
  if (response.status === 200) {
    yield put(updateAllFood(foodByName));
  }
}

function* handleSearchFoodToKey({ payload }) {
  try {
    const response = yield call(findFoodApi, payload);
    const { foodByName, foodByPrices, foodByRation, foodByReview, foodByType } =
      response.data;
    const foods = foodByName.concat(
      foodByPrices,
      foodByRation,
      foodByReview,
      foodByType
    );
    if (response.status === 200) {
      yield put(updateAllFood(foods));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* getFoodDetail({ payload }) {
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

export {
  handleGetAllFoods,
  handleSearchNameFood,
  handleSearchFoodToKey,
  getFoodDetail,
};
