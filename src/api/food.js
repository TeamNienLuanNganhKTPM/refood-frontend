/** @format */

import instance from "api";

export const getAllFoodApi = async () =>
  await instance.request({ method: "GET", url: `/food/get-foods` });

export const getAllPaginationFoodApi = async (data) => {
  const { currentPage, countFood } = data;
  return await instance.request({
    method: "GET",
    url: `/food/get-foods/${currentPage}/${countFood}`,
  });
};

export const getFoodDetailApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/food/get-food-details/${param}`,
  });
};

export const getFoodCommentApi = async (data) => {
  const { foodId, page } = data;
  return await instance.request({
    method: "GET",
    url: `/food/get-food-comments/${foodId}?limit=${page}`,
  });
};

export const addFoodCommentApi = async (comment) => {
  return await instance.request({
    method: "POST",
    data: comment,
    url: `/food/add-comment`,
  });
};

export const deleteFoodCommentApi = async (comment) => {
  return await instance.request({
    method: "DELETE",
    data: comment,
    url: `/food/delete-comment`,
  });
};
