import axios from "axios";
import { SET_CATEGORY, SET_PRODUCT } from "../type";

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
export { getCategory, getProduct };
