/** @format */

import instance from "api";

export const signUpApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/register" });

export const loginApi = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/login" });
