import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";

import "./myAccount.scss";
import { useSelector } from "react-redux";
import { Alert } from "antd";

const MyAcount = () => {
  const user = useSelector((state) => state.userReducer.user);
  const errorMessage = useSelector(
    (state) => state.errorReducer?.error?.message
  );
  return (
    <div className="MyAcount">
      <Navigation />
      <div className="container">
        {errorMessage && (
          <Alert
            message={errorMessage}
            description="Please try again"
            type="error"
            closable
          />
        )}
        {user ? (
          <h1>Hello {user.username}</h1>
        ) : (
          <div style={{ display: "flex", padding: "50px 0" }}>
            <Login width={"50%"} />
            <Register width={"50%"} />
            <div className="or">
              <p>OR</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAcount;
