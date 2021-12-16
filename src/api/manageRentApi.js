import axiosClient from "./axiosClient";

const manageRentApi = {
    getRentRooms(locationId) {
        const url = `rooms?locationId=${locationId}`
        return axiosClient.get(url)
    },
    postBookingRentRooms(data) {
        const url = `rooms/booking`
        return axiosClient.post(url, data)
    }

};

export default manageRentApi;
