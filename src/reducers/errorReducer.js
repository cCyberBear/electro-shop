import { REGISTER_ERROR, SET_ERROR } from "../type";
const initialValue = {
  error: null,
  registerError: null,
};

const errorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };
    default:
      return state;
  }
};
export default errorReducer;
