import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./myAccount.scss";

const MyAcount = () => {
  return (
    <div className="MyAcount">
      <div className="container" style={{ display: "flex" }}>
        <Login width={"50%"} />
        <Register width={"50%"} />
        <div className="or">
          <p>OR</p>
        </div>
      </div>
    </div>
  );
};

export default MyAcount;
