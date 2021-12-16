import {} from "../types/AuthType";
import {
  CLOSE_MODAL_FILTER,
  DETAIL_RATING_ROOM,
  DETAIL_ROOM,
  FILTER_ROOM,
  GET_LISTROOM,
  HIDE_MODAL_RATED,
  OPEN_MODAL_FILTER,
  PAY_BOOKING_ROOM,
  SHOW_MODAL_RATED,
  NEW_ROOM,
} from "../types/ListRoomType";

const initialState = {
  arrListRoom: [],
  filter: [],
  filtered: [],
  filterPrice: false,
  filterRoom: false,
  modal: false,
  price: [0, 1000000],

  detailRoom: {},
  modalRated: false,
  detailRating: [],

  arrPayBooking: [],

  newRoom: {},
};

const RentRoomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LISTROOM: {
      return { ...state, arrListRoom: payload };
    }
    case FILTER_ROOM: {
      return { ...state, filter: payload };
    }
    case OPEN_MODAL_FILTER: {
      return { ...state, modal: true };
    }
    case CLOSE_MODAL_FILTER: {
      return { ...state, modal: false };
    }
    //Detail
    case DETAIL_ROOM: {
      return { ...state, detailRoom: payload };
    }
    case DETAIL_RATING_ROOM: {
      return { ...state, detailRating: payload };
    }
    case NEW_ROOM: {
      return { ...state, newRoom: payload };
    }

    case SHOW_MODAL_RATED: {
      return { ...state, modalRated: true };
    }
    case HIDE_MODAL_RATED: {
      return { ...state, modalRated: false };
    }
    case PAY_BOOKING_ROOM: {
      return { ...state, arrPayBooking: payload };
    }

    default:
      return { ...state };
  }
};

export default RentRoomsReducer;
