import { delUserAPI } from "../../../services/userManagermentAPI";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../constant/userManagermentConstant";
import userManagermentAction from "./userManagermentAction";

const deleteAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
      await delUserAPI(id);
      dispatch({ type: DELETE_USER_SUCCESS });
      dispatch(userManagermentAction());
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE });
    }
  };
};
export default deleteAction;
