import {
  GET_USERSPANIGATION_FAILURE,
  GET_USERSPANIGATION_REQUEST,
  GET_USERSPANIGATION_SUCCESS,
} from "../constant/userManagermentConstant";

const initialState = {
  isLoading: false,
  userList: [],
  error: null,
};
const userManagermentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERSPANIGATION_REQUEST:
      return { ...state, isLoading: true };
    case GET_USERSPANIGATION_SUCCESS:
      return { ...state, isLoading: false, userList: action.payload };
    case GET_USERSPANIGATION_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export default userManagermentReducer;
