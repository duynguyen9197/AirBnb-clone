import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
const configurationStore = () => {
  const middleWare = applyMiddleware(thunk);
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(rootReducer, composeEnhancers(middleWare));
  return store;
};
export default configurationStore;
