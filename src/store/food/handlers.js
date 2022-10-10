/** @format */

const {
  getAllFoodApi,
  findFoodApi,
  getFoodDetailApi,
  getFoodCommentApi,
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
  console.log("function*handleGetCommentDetails ~ payload", payload);
  try {
    const response = yield call(getFoodCommentApi, payload);
    if (response.status === 200) {
      yield put(updateCommentDetails(response.data.comments));
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
  handleGetFoodDetail,
  handleGetCommentDetails,
};
