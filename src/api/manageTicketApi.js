import axiosClient from "./axiosClient";

const manageTicketApi = {
    getTicketRooms(userId) {
        const url = `/tickets/by-user?userId=${userId}`
        return axiosClient.get(url)
    },


};

export default manageTicketApi;
