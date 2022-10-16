/** @format */

import { filterFoodApi, findFoodApi } from "api/search";
import { call, put } from "redux-saga/effects";
import { updateSearchFood } from "./slice";

function* handleSearchFilter({ payload }) {
  try {
    const response = yield call(filterFoodApi, payload);
    if (response.status === 200) {
      yield put(updateSearchFood(response.data.foods));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleSearchFoodAdvanced({ payload }) {
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
      yield put(updateSearchFood(foods));
    }
  } catch (error) {
    // const { message } = error.response.data;
    console.log(error);
  }
}

export { handleSearchFilter, handleSearchFoodAdvanced };
