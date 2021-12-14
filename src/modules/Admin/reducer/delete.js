import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constant/userManagermentConstant";

const initialState = {
  loading: false,
  error: null,
};

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return { ...state, ...payload, loading: false };
    case DELETE_USER_FAILURE:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
export default deleteReducer;
