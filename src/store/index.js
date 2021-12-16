import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import reducer
import AuthReducer from "./reducers/AuthReducer";
import LocationReducer from "./reducers/LocationReducer";
import ManageUserReducer from "./reducers/ManageUserReducer";
import ModalReducer from "./reducers/ModalReducer";
import RentRoomsReducer from "./reducers/RentRoomsReducer";
import SearchReducer from "./reducers/SearchReducer";

const rootReducer = combineReducers({
  AuthReducer,
  LocationReducer,
  SearchReducer,
  ModalReducer,
  RentRoomsReducer,
  ManageUserReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
