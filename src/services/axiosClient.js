import axios from "axios";
import qs from "query-string";
const axiosClient = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api",
  headers: {
    TokenByClass:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzIxNjAwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ3MzYzNjAwfQ.mOv5qM9N68AKpDxX9HZC3TaZNZaqfk-i1qO_Hcgf0RU",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
    });
  },
});
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data.message);
  }
);
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const { token } = JSON.parse(userJson);
      config.headers.token = ` ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosClient;
