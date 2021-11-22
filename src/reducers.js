import { combineReducers } from "redux";
import authReducer from "./modules/Auth/reducers/authReducer";
import userManagermentReducer from "./modules/UserManagerment/reducer/userManagermentReducer";
const rootReducer = combineReducers({
  authReducer,
  userManagermentReducer,
});
export default rootReducer;
