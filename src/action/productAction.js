import { notification } from "antd";
import axios from "axios";
import {
  ADD_LOADING,
  PRODUCT_LOADING,
  PRODUCT_SEARCH,
  REMOVE_CART,
  REMOVE_COMPARE,
  REMOVE_WISHLIST,
  SET_CART,
  SET_CART_REPLACE,
  SET_CATEGORY,
  SET_COMPARE,
  SET_ERROR,
  SET_FILTERED,
  SET_LOADING_ORDER,
  SET_PRODUCT,
  SET_TOP_PRODUCT,
  SET_WISHLIST,
} from "../type";
import { base, baseImage } from "../utils/base";

const openNotification = (message, description) => {
  notification.info({
    message,
    description,
    placement: "top",
  });
};
const validData = (data) => {
  return data.map((pro) => ({
    ...pro,
    img: `${baseImage}${pro.img}`,
  }));
};
const getAllData = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING, payload: true });
  const resCate = await axios.get(`${base}/category/all-category`);
  dispatch({ type: SET_CATEGORY, payload: resCate.data.data });
  const res = await axios.get(`${base}/product/all-product`);
  const restop = await axios.get(`${base}/order/get-top`);
  const products = validData(res.data.products);
  const topProduct = validData(restop.data.data);

  dispatch({ type: SET_PRODUCT, payload: products });
  dispatch({ type: SET_TOP_PRODUCT, payload: topProduct });
  dispatch({ type: PRODUCT_LOADING, payload: false });
};
const createProduct = (data) => async (dispatch) => {
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
    const newProduct = await axios.post(`${base}/product/create`, formdata);
    if (newProduct) {
      const res = await axios.get(`${base}/product/all-product`);
      const products = validData(res.data.products);
      dispatch({ type: SET_PRODUCT, payload: products });
      openNotification("Succes", "Product added successfuly");
    }
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
  dispatch({ type: ADD_LOADING, payload: false });
};
const updateProduct = (id, data) => async (dispatch) => {
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
    const res = await axios.post(`${base}/product/update/${id}`, formdata);
    const products = validData(res.data.data);
    dispatch({ type: SET_PRODUCT, payload: products });
    openNotification("Succes", "Product updated successfuly");
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
  dispatch({ type: ADD_LOADING, payload: false });
};
const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: ADD_LOADING, payload: true });
  try {
    const res = await axios.delete(`${base}/product/delete/${id}`);
    const products = validData(res.data.data);
    dispatch({ type: SET_PRODUCT, payload: products });
    openNotification("Succes", "Product deleted successfuly");
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
  dispatch({ type: ADD_LOADING, payload: false });
};
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
    await axios.post(`${base}/order/create`, cart);
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
  updateProduct,
  deleteProduct,
};
