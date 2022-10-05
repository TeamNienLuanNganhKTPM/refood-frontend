/** @format */

import instance from "api";

export const getAllFoodApi = () =>
  instance.request({ method: "GET", url: "/food/get-foods" });

export const findFoodApi = (name, param) =>
  instance.request({ method: "GET", url: `/food/find-foods?${name}=${param}` });
