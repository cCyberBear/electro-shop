import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
});
export default rootReducer;
