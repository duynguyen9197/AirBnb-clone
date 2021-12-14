import { postCreateUserAPI } from "../../../services/userManagermentAPI";
import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
} from "../constant/userManagermentConstant";
import userManagermentAction from "./userManagermentAction";

const formAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    try {
      await postCreateUserAPI(data);
      dispatch({ type: CREATE_USER_SUCCESS });
      dispatch(userManagermentAction());
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error });
    }
  };
};
export default formAction;
