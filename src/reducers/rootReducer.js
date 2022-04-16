import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  productReducer,
  orderReducer,
});
export default rootReducer;
