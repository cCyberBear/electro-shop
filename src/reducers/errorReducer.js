import { SET_ERROR } from "../type";
const initialValue = {
  error: null,
};

const errorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default errorReducer;
