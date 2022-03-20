import axios from "axios";
import { SET_ERROR, SET_LOADING, SET_USER } from "../type";

const register = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch({ type: SET_ERROR, payload: null });
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/register",
      data
    );
    dispatch({ type: SET_USER, payload: res.data.user });
    localStorage.setItem("token", res.data.token);
    dispatch(setLoading(false));
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data });
    dispatch(setLoading(false));
  }
};
const login = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch({ type: SET_ERROR, payload: null });
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/login",
      data
    );
    dispatch({ type: SET_USER, payload: res.data.user });
    localStorage.setItem("token", res.data.token);
    dispatch(setLoading(false));
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data });
    dispatch(setLoading(false));
  }
};
const setLoading = (loading) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: loading });
};
export { register, login, setLoading };
