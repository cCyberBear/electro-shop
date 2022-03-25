import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import functionReducer from "./functionReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  productReducer,
  functionReducer,
});
export default rootReducer;
