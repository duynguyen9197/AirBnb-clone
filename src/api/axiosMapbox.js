import axios from "axios";

const axiosMapbox = axios.create({
    baseURL: "https://api.mapbox.com",
    headers: {

    }
})

export default axiosMapbox;