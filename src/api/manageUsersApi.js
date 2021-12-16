import axiosClient from "./axiosClient";

const manageUserApi = {
  getAll() {
    const url = "/users/pagination";
    return axiosClient.get(url);
  },
  deleteUser(idUser) {
    const url = `/users/${idUser}`;
    return axiosClient.delete(url);
  },
  addUser(info) {
    const url = `/users`;
    return axiosClient.post(url, info);
  },
  editUser(idUser, info) {
    const url = `/users/${idUser}`;
    return axiosClient.put(url, info);
  },
};

export default manageUserApi;
