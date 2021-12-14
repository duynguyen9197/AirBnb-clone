import { putUpdateUserAPI } from "../../../services/userManagermentAPI";
import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../constant/userManagermentConstant";
import userManagermentAction from "./userManagermentAction";

const updateUserAction = (data, userID) => {
  console.log(data, userID);
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      await putUpdateUserAPI(data, userID);
      dispatch({ type: UPDATE_USER_SUCCESS });
      dispatch(userManagermentAction());
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE });
    }
  };
};
export default updateUserAction;
