import axiosClient from "./axiosClient";
export const getUsersPaginationAPI = () => {
  return axiosClient.get("/users/pagination");
};
