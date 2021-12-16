import { HIDE_MODAL_SEARCH, SHOW_MODAL_SEARCH } from "../types/ModalType";

const initialState = {
  modalSearch: false,
};

const ModalReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_MODAL_SEARCH: {
      return { ...state, modalSearch: true };
    }
    case HIDE_MODAL_SEARCH: {
      return { ...state, modalSearch: false };
    }
    default:
      return { ...state };
  }
};
export default ModalReducer;
