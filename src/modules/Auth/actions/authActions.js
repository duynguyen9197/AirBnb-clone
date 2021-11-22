import { postLoginAPI, postRegisterAPI } from "./../../../services/authAPI";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constant/authConstant";

export const registerAction = (value, goToHomepage) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      await postRegisterAPI(value);
      dispatch({ type: REGISTER_SUCCESS });
      goToHomepage();
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error,
      });
    }
  };
};
export const loginAction = (value, goToPage) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      await postLoginAPI(value);
      dispatch({ type: LOGIN_SUCCESS });
      goToPage();
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
    }
  };
};
