import {
  REMOVE_CART,
  SET_CART,
  SET_CATEGORY,
  SET_COMPARE,
  SET_FILTERED,
  SET_PRODUCT,
  SET_WISHLIST,
  PRODUCT_LOADING,
  REMOVE_COMPARE,
  PRODUCT_SEARCH,
  SET_CART_REPLACE,
  ADD_LOADING,
  CLEAR_CART,
  SET_LOADING_ORDER,
  REMOVE_WISHLIST,
  SET_TOP_PRODUCT,
} from "../type";
const initialValue = {
  add_loading: false,
  loading: true,
  category: [],
  products: [],
  topProduct: [],
  wishList: [],
  cart: [],
  compare: [],
  filtered: [],
  search: [],
  place_order_loading: false,
  success: false,
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
    case SET_TOP_PRODUCT:
      return {
        ...state,
        topProduct: action.payload,
      };
    case SET_CART:
      const cart = state.products.filter(
        (pro) => pro._id === action.payload
      )[0];
      const idxCart = state.cart.findIndex(
        (cartItem) => cartItem._id === cart._id
      );
      if (idxCart === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...cart, quantity: action.quantity }],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, idxCart),
            {
              ...state.cart[idxCart],
              quantity: state.cart[idxCart].quantity + action.quantity,
            },
            ...state.cart.slice(idxCart + 1),
          ],
        };
      }
    case SET_CART_REPLACE:
      const cartReplace = state.products.filter(
        (pro) => pro._id === action.payload
      )[0];
      const idxCartReplace = state.cart.findIndex(
        (cartItem) => cartItem._id === cartReplace._id
      );
      if (idxCartReplace === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...cartReplace, quantity: action.quantity }],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, idxCartReplace),
            {
              ...state.cart[idxCartReplace],
              quantity: action.quantity,
            },
            ...state.cart.slice(idxCartReplace + 1),
          ],
        };
      }
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case SET_WISHLIST:
      const wishList = state.products.filter(
        (pro) => pro._id === action.payload
      )[0];
      const idxWish = state.wishList.findIndex(
        (wishItem) => wishItem._id === wishList._id
      );
      if (idxWish === -1) {
        return {
          ...state,
          wishList: [...state.wishList, wishList],
        };
      } else {
        break;
      }
    case REMOVE_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item._id !== action.payload),
      };
    case SET_COMPARE:
      const compare = state.products.filter(
        (pro) => pro._id === action.payload
      )[0];
      const idxComp = state.compare.findIndex(
        (compItem) => compItem._id === compare._id
      );
      if (idxComp === -1) {
        return {
          ...state,
          compare: [...state.compare, compare],
        };
      } else {
        break;
      }
    case REMOVE_COMPARE:
      return {
        ...state,
        compare: state.compare.filter((item) => item._id !== action.payload),
      };
    case SET_FILTERED:
      return {
        ...state,
        filtered: state.products.filter((pro) => {
          const item = pro.subCategory.map((val) => val._id);
          return item.includes(action.payload);
        }),
      };
    //remove
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_LOADING:
      return {
        ...state,
        add_loading: action.payload,
      };
    case PRODUCT_SEARCH:
      if (
        action.payload.categoryId === false &&
        action.payload.searchKey === ""
      ) {
        return {
          ...state,
          search: [...state.products],
        };
      } else {
        const productCategory = state.products.filter((pro) => {
          const item = pro.subCategory.map((val) => val._id);
          const subCategories = state.category.filter(
            (val) => val._id === action.payload?.categoryId
          )[0]?.subCategory[0]._id;
          return item.includes(subCategories);
        });
        const productSearched = state.products.filter((value) => {
          return value.name
            .toLowerCase()
            .includes(action.payload?.searchKey.toLowerCase());
        });
        const result = productCategory.filter((o) =>
          productSearched.some(
            ({ _id, name }) => o._id === _id && o.name === name
          )
        );
        return {
          ...state,
          search: result.length
            ? result
            : productSearched.length
            ? productSearched
            : productCategory,
        };
      }
    case SET_LOADING_ORDER:
      return {
        ...state,
        place_order_loading: action.payload,
        success: action.success,
      };
    default:
      return state;
  }
};
export default productReducer;
