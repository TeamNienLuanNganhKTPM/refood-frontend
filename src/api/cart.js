/** @format */

import instance from "api";

export const addCartApi = (cartItem) => {
  return instance.request({
    method: "POST",
    data: cartItem,
    url: `/cart/add-to-cart`,
  });
};

export const getCartDetailApi = () => {
  return instance.request({
    method: "GET",
    url: `/cart/get-cart-detail`,
  });
};

export const updateCartApi = (cartItem) => {
  return instance.request({
    method: "POST",
    data: cartItem,
    url: `/cart/update-cart`,
  });
};

export const deleteCartApi = (mactma) => {
  return instance.request({
    method: "DELETE",
    data: mactma,
    url: `/cart/delete-cart-detail`,
  });
};
