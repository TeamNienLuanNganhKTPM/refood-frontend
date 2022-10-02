/** @format */

import instance from "api";

export const signUpApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/register" });

export const loginApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/login" });

export const getUserApi = () =>
  instance.request({ method: "GET", url: "/auth/info" });

export const updateUserInfoApi = (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/info" });

export const updateUserPassApi = (user) =>
  instance.request({ method: "PUT", data: user, url: "/auth/update/password" });
