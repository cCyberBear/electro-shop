import { SET_ORDER } from "../type";
const initialValue = {
  orders: [],
};

const orderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
