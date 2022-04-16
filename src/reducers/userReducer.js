import {
  SET_USER,
  SET_LOADING1,
  SET_LOADING2,
  SET_CUSTOMER,
  AUTHING,
} from "../type";
const initialValue = {
  user: null,
  customer: [],
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
    case AUTHING:
      return {
        ...state,
        authing: action.payload,
      };
    case SET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
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
