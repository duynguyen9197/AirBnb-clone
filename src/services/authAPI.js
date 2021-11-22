import axiosClient from "./axiosClient";
export const postRegisterAPI = (values) =>
  axiosClient.post(`/auth/register`, {
    ...values,
  });
export const postLoginAPI = (values) =>
  axiosClient.post(`/auth/login`, {
    ...values,
  });
