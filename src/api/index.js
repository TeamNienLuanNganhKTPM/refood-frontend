/** @format */

import { store } from "store/configureStore";
import { LOGOUT_SUCCESS } from "store/users/slice";

const { default: axios } = require("axios");

const token = window.localStorage.getItem("access_token");
const user = window.localStorage.getItem("user");
const CustomerId = JSON.parse(user)?.CustomerId;

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? token : undefined,
    CustomerId: CustomerId ? CustomerId : undefined,
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (req) => {
    const { user } = store.getState();
    console.log(user);
    if (user.access_token) {
      req.headers.Authorization = user.access_token;
    }
    return req;
  },
  null,
  { synchronous: true }
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      store.dispatch(LOGOUT_SUCCESS());
    }
    return Promise.reject(error);
  }
);

export default instance;
