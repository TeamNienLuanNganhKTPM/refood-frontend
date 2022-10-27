/** @format */

import instance from "api";

export const createOrderApi = async (order) => {
  return await instance.request({
    method: "POST",
    data: order,
    url: `/order/create-food-order`,
  });
};

export const vnPayOrderApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/order/pay-for-food-order/${param}`,
  });
};

export const getAllOrderApi = async (data) => {
  console.log("getAllOrderApi ~ data", data);
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/order/get-all-food-orders/${pageCur}/${numOnPage}`,
  });
};
