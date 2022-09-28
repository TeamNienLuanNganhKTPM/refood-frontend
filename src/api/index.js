/** @format */

const { default: axios } = require("axios");

// const token = window.localStorage.getItem("access_token");

const instance = axios.create({
  baseURL: "http://localhost:8080",
  // headers: {
  //   Authorization: token ? `${token}` : "",
  // },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
