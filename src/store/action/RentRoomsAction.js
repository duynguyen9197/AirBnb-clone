import managerDetailRoom from "../../api/managerDetailRoom";
import manageRentApi from "../../api/manageRentApi";
import {
  DETAIL_RATING_ROOM,
  DETAIL_ROOM,
  GET_LISTROOM,
  NEW_ROOM,
} from "../types/ListRoomType";
import { createAction } from "./createAction/createAction";

export const getRentRoomsAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.getRentRooms(id);
      dispatch(createAction(GET_LISTROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const DetailRoomAction = (idRoom, setLoading) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.getDetailRoom(idRoom);
      await dispatch(createAction(DETAIL_ROOM, res));
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  };
};

export const DetailRatingAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.getDetailRatingRoom(idRoom);
      dispatch(createAction(DETAIL_RATING_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddRatingAction = (idRoom, content, success) => {
  return async (dispatch) => {
    try {
      await managerDetailRoom.addRatingRoom(idRoom, content);
      await dispatch(DetailRatingAction(idRoom));
      success('Thêm đánh giá thành công')
    } catch (error) {
      console.log(error);
    }
  };
};
export const DeleteRatingAction = (idRoom, idRating, success) => {
  return async (dispatch) => {
    try {
      await managerDetailRoom.deleteRatingRoom(idRating);
      await dispatch(DetailRatingAction(idRoom));
      success('Xóa đánh giá thành công')
    } catch (error) {
      console.log(error);
    }
  };
};
export const PayBookingAction = (data) => {
  return async () => {
    try {
      await manageRentApi.postBookingRentRooms(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const UpdateDetailRoomAction = (idRoom, valueRoom, locaTionId, success) => {
  return async (dispatch) => {
    try {
      await managerDetailRoom.updateDetailRoom(idRoom, valueRoom);
      await dispatch(getRentRoomsAction(locaTionId));
      success('Cập nhật phòng thành công')
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddRoomAction = (valueRoom, locaTionId) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.addRoom(valueRoom);
      dispatch(createAction(NEW_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateImageRoomAction = (idRoom, fileData, locaTionId) => {
  return async (dispatch) => {
    try {
      await managerDetailRoom.updateImageRoom(idRoom, fileData);
      await dispatch(getRentRoomsAction(locaTionId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteRoomAction = (idRoom, locaTionId, success) => {
  return async (dispatch) => {
    try {
      await managerDetailRoom.deleteRoom(idRoom);
      await dispatch(getRentRoomsAction(locaTionId));
      success('Xóa phòng thành công')
    } catch (error) {
      console.log(error);
    }
  };
};
