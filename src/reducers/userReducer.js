import { SET_USER, SET_LOADING1, SET_LOADING2 } from "../type";
const initialValue = {
  user: null,
  authing: false,
  loading1: false,
  loading2: false,
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOADING1:
      return {
        ...state,
        loading1: action.payload,
      };
    case SET_LOADING2:
      return {
        ...state,
        loading2: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
