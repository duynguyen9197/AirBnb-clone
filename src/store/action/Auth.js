import manageAuthApi from "../../api/manageAuthApi";
import { TOKEN, USERID } from "../../constants/config";
import {
  GET_INFO_USER,
  HIDE_MODAL_SIGNIN,
  HIDE_MODAL_SIGNUP,
  SHOW_MODAL_SIGNIN,
} from "../types/AuthType";
import { createAction } from "./createAction/createAction";

export const loginAction = (user, success, error) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.login(user);
      if (res.token) {
        dispatch(createAction(HIDE_MODAL_SIGNIN));
        await success('Đăng nhập thành công')
      }
      dispatch(createAction(GET_INFO_USER, res.user));
      localStorage.setItem(USERID, res.user._id);
      localStorage.setItem(TOKEN, res.token);
    } catch (err) {
      error('Email hoặc mật khẩu không đúng')
      console.log(err);
    }
  };
};

export const registerAction = (user, success, error) => {
  return async (dispatch) => {
    try {
      await manageAuthApi.register(user);
      dispatch(createAction(HIDE_MODAL_SIGNUP));
      success('Đăng ký thành công')
      await dispatch(createAction(SHOW_MODAL_SIGNIN));
    } catch (err) {
      error('Vui lòng nhập đúng thông tin')
      console.log(err);
    }
  };
};

export const getInfoUserAction = (idUser) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.getInfoUser(idUser);
      dispatch(createAction(GET_INFO_USER, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAvatarUser = (formData) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.postAvatarUser(formData)
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  }
}