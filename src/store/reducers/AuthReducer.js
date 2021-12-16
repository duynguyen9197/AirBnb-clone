import {
  GET_INFO_USER,
  HIDE_MODAL_SIGNIN,
  HIDE_MODAL_SIGNUP,
  LOG_OUT,
  SHOW_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP,
} from "../types/AuthType";

const initialState = {
  modalSignIn: false,
  modalSignUp: false,
  infoUser: {},
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Show -- Hide modal Sign In
    case SHOW_MODAL_SIGNIN: {
      return { ...state, modalSignIn: true };
    }
    case HIDE_MODAL_SIGNIN: {
      return { ...state, modalSignIn: false };
    }

    // Show -- Hide modal Sign Up

    case SHOW_MODAL_SIGNUP: {
      return { ...state, modalSignUp: true };
    }
    case HIDE_MODAL_SIGNUP: {
      return { ...state, modalSignUp: false };
    }

    // Get info User login
    case GET_INFO_USER: {
      return { ...state, infoUser: payload };
    }

    case LOG_OUT: {
      return { ...state, infoUser: [] };
    }

    default:
      return { ...state };
  }
};

export default AuthReducer;
