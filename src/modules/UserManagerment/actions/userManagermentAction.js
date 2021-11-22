import { getUsersPaginationAPI } from "../../../services/userManagermentAPI";
import {
  GET_USERSPANIGATION_FAILURE,
  GET_USERSPANIGATION_REQUEST,
  GET_USERSPANIGATION_SUCCESS,
} from "../constant/userManagermentConstant";

const userManagermentAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERSPANIGATION_REQUEST });
    try {
      const data = await getUsersPaginationAPI();
      dispatch({ type: GET_USERSPANIGATION_SUCCESS, payload: data });
    } catch (error) {
      // console.log(error);
      dispatch({ type: GET_USERSPANIGATION_FAILURE, payload: error });
    }
  };
};
export default userManagermentAction;
