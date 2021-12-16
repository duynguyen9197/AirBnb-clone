import axiosClient from "./axiosClient";
const managerDetailRoom = {
  getDetailRoom(idRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.get(url);
  },
  getDetailRatingRoom(idRoom) {
    const url = `reviews/byRoom?roomId=${idRoom}`;
    return axiosClient.get(url);
  },
  addRatingRoom(idRoom, content) {
    const url = `reviews?roomId=${idRoom}`;
    return axiosClient.post(url, content);
  },
  deleteRatingRoom(idRating) {
    const url = `reviews/${idRating}`;
    return axiosClient.delete(url);
  },
  updateDetailRoom(idRoom, valueRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.put(url, valueRoom);
  },
  addRoom(valueRoom) {
    const url = `rooms`;
    return axiosClient.post(url, valueRoom);
  },
  deleteRoom(idRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.delete(url);
  },
  updateImageRoom(idRoom, fileData) {
    const url = `rooms/upload-image/${idRoom}`;
    return axiosClient.post(url, fileData);
  },
};
export default managerDetailRoom;
