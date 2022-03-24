import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers["Authorization"];
  }
};
