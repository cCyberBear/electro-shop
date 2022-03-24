import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { HashLoader} from "react-spinners";


const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userReducer.currentUser);
  const authing = useSelector((state) => state.userReducer.authing);
  return authing ? <HashLoader  color={"#005185"} size={100} /> : user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
