/** @format */

import instance from "api";

export const getAllFoodApi = () =>
  instance.request({ method: "GET", url: "/food/get-foods" });

export const getFoodDetailApi = (param) => {
  return instance.request({
    method: "GET",
    url: `/food/get-food-details/${param}`,
  });
};

export const getFoodCommentApi = (data) => {
  const { foodId, page } = data;
  return instance.request({
    method: "GET",
    url: `/food/get-food-comments/${foodId}?limit=${page}`,
  });
};

export const addFoodCommentApi = (comment) => {
  return instance.request({
    method: "POST",
    data: comment,
    url: `/food/add-comment`,
  });
};

export const deleteFoodCommentApi = (comment) => {
  return instance.request({
    method: "DELETE",
    data: comment,
    url: `/food/delete-comment`,
  });
};
