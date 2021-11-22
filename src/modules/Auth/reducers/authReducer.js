import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constant/authConstant";

const initialState = {
  isLoading: false,
  error: null,
  // currentUser,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_FAILURE:
    case REGISTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case REGISTER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload.data,
        error: null,
      };
    }
    default:
      return state;
  }
};
export default authReducer;
