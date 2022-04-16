import axios from "axios";
import { SET_ORDER } from "../type";
const parseISOString = (string) => {
  const date = new Date(string);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return year + "-" + month + "-" + dt + ", " + hour + ":" + min;
};
const getOrders = (role) => async (dispatch) => {
  let res;
  if (role === "admin") {
    res = await axios.get(
      "https://khuongduy.herokuapp.com/kd/api/v0/order/all-order"
    );
  } else {
    res = await axios.get(
      "https://khuongduy.herokuapp.com/kd/api/v0/order/user-order"
    );
  }
  const data = res.data.data.map((val) => {
    return {
      ...val,
      createdAt: parseISOString(val.createdAt),
    };
  });
  dispatch({ type: SET_ORDER, payload: data });
};

export { getOrders };
