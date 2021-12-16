import axiosClient from "./axiosClient";

const manageAuthApi = {
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
    // data {email: '', password: ''}
  },
  register(data) {
    const url = "/auth/register";
    return axiosClient.post(url, data);
    // data {name: '', email: '', password: '', phone: '', birthday: '', gender: true(male), false(fermale), address: ''}
  },

  getInfoUser(idUser) {
    const url = `/users/${idUser}`;
    return axiosClient.get(url);
    // data {name: '', email: '', password: '', phone: '', birthday: '', gender: true(male), false(fermale), address: ''}
  },

  postAvatarUser(formData) {
    const url = `/users/upload-avatar`;
    return axiosClient.post(url, formData);
  },
};

export default manageAuthApi;
