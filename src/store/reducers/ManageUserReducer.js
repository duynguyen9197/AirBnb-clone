import { GET_USER_LIST } from "../types/AdminType";

const initialState = {
  userList: [],
};

const ManageUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST: {
      return { ...state, userList: payload };
    }

    default:
      return { ...state };
  }
};

export default ManageUserReducer;
