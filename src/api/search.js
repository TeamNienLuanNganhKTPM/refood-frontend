/** @format */
import instance from "api";

export const findFoodApi = (param) => {
  return instance.request({
    method: "GET",
    url: `/food/find-foods?${param}`,
  });
};

export const filterFoodApi = (param) => {
  return instance.request({
    method: "GET",
    url: `/food/filter-foods?${param}`,
  });
};
