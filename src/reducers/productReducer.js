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
} from "../type";
const initialValue = {
  loading: true,
  category: null,
  products: null,
  wishList: [],
  cart: [],
  compare: [],
  filtered: [],
  search: [],
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
              ...state.cart.slice(idxCart + 1),
            },
          ],
        };
      }
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
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
    case PRODUCT_SEARCH:
      if (
        action.payload.categoryId === false &&
        action.payload.searchKey == ""
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

    default:
      return state;
  }
};
export default productReducer;
