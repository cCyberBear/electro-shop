import { SET_CATEGORY, SET_PRODUCT } from "../type";
const initialValue = {
  category: null,
  products: null,
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
