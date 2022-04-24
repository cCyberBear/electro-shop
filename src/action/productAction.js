import { notification } from "antd";
import axios from "axios";
import {
  SET_CATEGORY,
  SET_PRODUCT,
  SET_CART,
  SET_COMPARE,
  SET_WISHLIST,
  REMOVE_CART,
  SET_FILTERED,
  PRODUCT_LOADING,
  REMOVE_COMPARE,
  PRODUCT_SEARCH,
  SET_CART_REPLACE,
  ADD_LOADING,
  SET_ERROR,
  SET_LOADING_ORDER,
  REMOVE_WISHLIST,
} from "../type";

const getAllData = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING, payload: true });
  const resCate = await axios.get(
    "https://khuongduy.herokuapp.com/kd/api/v0/category/all-category"
  );
  dispatch({ type: SET_CATEGORY, payload: resCate.data.data });
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
  dispatch({ type: PRODUCT_LOADING, payload: false });
};
const createProduct = (data) => async (dispatch) => {
  const openNotification = (placement = "top") => {
    notification.info({
      message: "Succes",
      description: "Product added successfuly",
      placement,
    });
  };
  dispatch({ type: ADD_LOADING, payload: true });
  const formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("retailPrice", data.retailPrice);
  formdata.append("quantity", data.quantity);
  formdata.append("subCategory", data.subCategory);
  formdata.append("description", data.description);
  formdata.append("image", data.image);
  try {
    dispatch({ type: SET_ERROR, payload: null });
    const newProduct = await axios.post(
      "https://khuongduy.herokuapp.com/kd/api/v0/product/create",
      formdata
    );
    if (newProduct) {
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
      openNotification();
    }
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
  dispatch({ type: ADD_LOADING, payload: false });
};
// const getCategory = () => async (dispatch) => {
//   const res = await axios.get(
//     "https://khuongduy.herokuapp.com/kd/api/v0/category/all-category"
//   );
//   dispatch({ type: SET_CATEGORY, payload: res.data.data });
// };
// const getProduct = () => async (dispatch) => {
//   const res = await axios.get(
//     "https://khuongduy.herokuapp.com/kd/api/v0/product/all-product"
//   );
//   const products = res.data.products.map((pro) => {
//     return {
//       ...pro,
//       img: `https://khuongduy.herokuapp.com/uploads/${pro.img}`,
//     };
//   });
//   dispatch({ type: SET_PRODUCT, payload: products });
// };

const setCart =
  (id, quantity = 1) =>
  (dispatch) => {
    dispatch({ type: SET_CART, payload: id, quantity });
  };
const setCartReplace =
  (id, quantity = 1) =>
  (dispatch) => {
    dispatch({ type: SET_CART_REPLACE, payload: id, quantity });
  };
const removeCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_CART, payload: id });
};
const setWishlist = (id) => (dispatch) => {
  dispatch({ type: SET_WISHLIST, payload: id });
};
const removeWishList = (id) => (dispatch) => {
  dispatch({ type: REMOVE_WISHLIST, payload: id });
};
const removeCompare = (id) => (dispatch) => {
  dispatch({ type: REMOVE_COMPARE, payload: id });
};
const setCompare = (id) => (dispatch) => {
  dispatch({ type: SET_COMPARE, payload: id });
};
const setFilter = (subid, navigate) => (dispatch) => {
  dispatch({ type: SET_FILTERED, payload: subid });
  navigate("/shop");
};
const setSearch = (data, navigate) => (dispatch) => {
  dispatch({ type: PRODUCT_SEARCH, payload: data });
  navigate("/search");
};
const placeOrder = (data) => async (dispatch) => {
  dispatch({ type: SET_LOADING_ORDER, payload: true, success: false });
  dispatch({ type: SET_ERROR, payload: null });
  const cart = data.map((val) => {
    return {
      product: val._id,
      quantity: val.quantity,
    };
  });
  try {
    await axios.post(
      "https://khuongduy.herokuapp.com/kd/api/v0/order/create",
      cart
    );
    dispatch({ type: SET_LOADING_ORDER, payload: false, success: true });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: "please check quantity of product" });
    dispatch({ type: SET_LOADING_ORDER, payload: false, success: false });
  }
};
export {
  setCart,
  setCompare,
  setWishlist,
  removeCart,
  setFilter,
  getAllData,
  removeCompare,
  setSearch,
  setCartReplace,
  createProduct,
  placeOrder,
  removeWishList,
};
