import { combineReducers } from "redux";
import authReducer from "./modules/Auth/reducers/authReducer";
import userManagermentReducer from "./modules/Admin/reducer/userManagermentReducer";
import deleteReducer from "./modules/Admin/reducer/delete";

const rootReducer = combineReducers({
  authReducer,
  userManagermentReducer,
  deleteReducer,
});
export default rootReducer;
