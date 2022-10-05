/** @format */

import instance from "api";

export const signUpApi = async (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/register" });

export const loginApi = async (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/login" });

export const getUserApi = async () =>
  instance.request({ method: "GET", url: "/auth/info" });

export const updateUserInfoApi = async (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/info" });

export const updateUserPassApi = async (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/password" });

export const getAllAddressApi = () =>
  instance.request({ method: "GET", url: "/auth/get-addresses" });

export const getDistrictApi = () =>
  instance.request({ method: "GET", url: "/cantho-units/get-districts" });

export const getWardApi = (districtId) =>
  instance.request({
    method: "GET",
    url: `/cantho-units/get-wards/${districtId}`,
  });
