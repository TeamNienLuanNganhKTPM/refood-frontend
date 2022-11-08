/** @format */
import instance from "api";

export const findFoodApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/food/find-foods?${param}`,
  });
};

export const filterFoodApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/food/filter-foods/${param}`,
  });
};

export const getFindAllSearchFoodApi = async (data) => {
  const { currentPage, countFood } = data;
  return await instance.request({
    method: "GET",
    url: `/food/get-foods/${currentPage}/${countFood}`,
  });
};
