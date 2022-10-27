/** @format */

import instance from "api";
import axios from "axios";

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
