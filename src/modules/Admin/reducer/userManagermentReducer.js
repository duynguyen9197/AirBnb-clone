import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USERSPANIGATION_FAILURE,
  GET_USERSPANIGATION_REQUEST,
  GET_USERSPANIGATION_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  ON_SEARCH,
} from "../constant/userManagermentConstant";

const initialState = {
  isLoading: false,
  userList: [],
  error: null,
  userListConstant: [],
};
const userManagermentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERSPANIGATION_REQUEST:
    case CREATE_USER_REQUEST:
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USERSPANIGATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.payload,
        userListConstant: action.payload,
      };
    case GET_USERSPANIGATION_FAILURE:
    case CREATE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case ON_SEARCH:
      const userListSearch = state.userListConstant.filter(
        (user) =>
          user.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
      );

      return { ...state, userList: userListSearch };
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default userManagermentReducer;
