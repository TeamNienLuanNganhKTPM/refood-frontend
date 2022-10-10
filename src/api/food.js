/** @format */

import instance from "api";

export const getAllFoodApi = () =>
  instance.request({ method: "GET", url: "/food/get-foods" });

export const findFoodApi = (param) => {
  const paramSearch = new URLSearchParams([
    ...Object.entries(param),
  ]).toString();
  console.log("findFoodApi ~ paramSearch", paramSearch);
  return instance.request({
    method: "GET",
    url: `/food/find-foods?${paramSearch}`,
  });
};

export const getFoodDetailApi = (param) => {
  return instance.request({
    method: "GET",
    url: `/food/get-food-details/${param}`,
  });
};

export const getFoodCommentApi = (id) => {
  return instance.request({
    method: "GET",
    url: `/food/get-food-comments/${id}`,
  });
};
