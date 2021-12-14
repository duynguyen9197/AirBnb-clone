import axiosClient from "./axiosClient";
export const postCreateUserAPI = (data) => {
  return axiosClient.post("/users", { ...data });
};
export const putUpdateUserAPI = (data, userID) => {
  return axiosClient.put(`/users/${userID}`, data);
};
export const delUserAPI = (userID) => {
  return axiosClient.delete(`/users/${userID}`);
};
export const getUsersPaginationAPI = () => {
  return axiosClient.get("/users/pagination");
};
