/** @format */

import instance from "api";

export const findPartyFoodApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/food/find-foods?ration=10/&${param}`,
  });
};

export const findPartyAllApi = async () => {
  return await instance.request({
    method: "GET",
    url: `/food/find-foods?ration=10`,
  });
};

export const createPartyApi = async (data) => {
  return await instance.request({
    method: "POST",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/party/create-party`,
  });
};
