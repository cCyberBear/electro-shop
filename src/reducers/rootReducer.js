import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  productReducer,
});
export default rootReducer;
