/** @format */

import instance from "api";

export const signUp = (user) =>
  instance.request({ method: "POST", data: user, url: "/auth/register" });
