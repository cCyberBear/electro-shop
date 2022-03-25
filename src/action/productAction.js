import axios from "axios";
import {
  SET_CATEGORY,
  SET_PRODUCT,
  SET_CART,
  SET_COMPARE,
  SET_WISHLIST,
} from "../type";

const getCategory = () => async (dispatch) => {
  const res = await axios.get(
    "https://khuongduy.herokuapp.com/kd/api/v0/category/all-category"
  );
  dispatch({ type: SET_CATEGORY, payload: res.data.data });
};
const getProduct = () => async (dispatch) => {
  const res = await axios.get(
    "https://khuongduy.herokuapp.com/kd/api/v0/product/all-product"
  );
  const products = res.data.products.map((pro) => {
    return {
      ...pro,
      img: `https://khuongduy.herokuapp.com/uploads/${pro.img}`,
    };
  });
  dispatch({ type: SET_PRODUCT, payload: products });
};

const setCart = (id) => (dispatch) => {
  dispatch({ type: SET_CART, payload: id });
};

const setWishlist = (id) => (dispatch) => {
  dispatch({ type: SET_WISHLIST, payload: id });
};
const setCompare = (id) => (dispatch) => {
  dispatch({ type: SET_COMPARE, payload: id });
};
export { setCart, setCompare, setWishlist, getCategory, getProduct };
