import manageUserApi from "../../api/manageUsersApi";
import { GET_USER_LIST } from "../types/AdminType";
import { createAction } from "./createAction/createAction";

export const getListUser = () => {
  return async (dispatch) => {
    try {
      const res = await manageUserApi.getAll();
      dispatch(createAction(GET_USER_LIST, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (idUser, success) => {
  return async (dispatch) => {
    try {
      await manageUserApi.deleteUser(idUser);
      await dispatch(getListUser());
      success('Xóa người dùng thành công')
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAction = (info, success, changePage) => {
  return async (dispatch) => {
    try {
      await manageUserApi.addUser(info);
      success('Thêm người dùng thành công')
      changePage()
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserAction = (idUser, info, success, changePage) => {
  return async () => {
    try {
      await manageUserApi.editUser(idUser, info);
      success('Cập nhật người dùng thành công')
      changePage()
    } catch (error) {
      console.log(error);
    }
  };
};
