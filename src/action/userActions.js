import axios from "axios";
import {
  SET_ERROR,
  SET_LOADING1,
  SET_LOADING2,
  SET_USER,
  AUTHING,
} from "../type";
import { setAuthToken } from "../helper/axiosHeader";

const register = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(SET_LOADING2, true));
    dispatch({ type: SET_ERROR, payload: null });
    const res = await axios.post(
      "https://khuongduy.herokuapp.com/kd/api/v0/user/register",
      data
    );
    setAuthToken(res.data.token);
    dispatch({ type: SET_USER, payload: res.data.user });
    localStorage.setItem("token", res.data.token);
    dispatch(setLoading(SET_LOADING2, false));
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data });
    dispatch(setLoading(SET_LOADING2, false));
  }
};
const login = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(SET_LOADING1, true));
    dispatch({ type: SET_ERROR, payload: null });
    const res = await axios.post(
      "https://khuongduy.herokuapp.com/kd/api/v0/user/login",
      data
    );
    setAuthToken(res.data.token);
    dispatch({ type: SET_USER, payload: res.data.user });
    localStorage.setItem("token", res.data.token);
    dispatch(setLoading(SET_LOADING1, false));
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data });
    dispatch(setLoading(SET_LOADING1, false));
  }
};
const changePassword = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(SET_LOADING1, true));
    dispatch({ type: SET_ERROR, payload: null });
    console.log(axios.defaults.headers["Authorization"]);
    const res = await axios.patch(
      "https://khuongduy.herokuapp.com/kd/api/v0/user/change-password",
      data
    );

    console.log(res);
    dispatch({ type: SET_USER, payload: null });
    localStorage.removeItem("token", res.data.token);
    dispatch(setLoading(SET_LOADING1, false));
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data });
    dispatch(setLoading(SET_LOADING1, false));
  }
};
const getCurrentUser = (token) => async (dispatch) => {
  try {
    setAuthToken(token);
    const res = await axios.get(
      "https://khuongduy.herokuapp.com/kd/api/v0/user/me"
    );
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {
    setAuthToken(false);
  }
};
const setLoading = (type, loading) => (dispatch) => {
  dispatch({ type, payload: loading });
};
const logOut = (navigate) => (dispatch) => {
  navigate("/");
  setAuthToken(null);
  dispatch({ type: SET_USER, payload: null });
  localStorage.removeItem("token");
};
export { register, login, setLoading, logOut, changePassword, getCurrentUser };
