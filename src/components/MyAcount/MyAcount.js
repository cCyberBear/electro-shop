import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const MyAcount = () => {
  return (
    <div className="MyAcount">
      <div className="form">
        <div className="container" style={{ display: "flex" }}>
          <Login width={"50%"} />
          <Register width={"50%"} />
        </div>
      </div>
    </div>
  );
};

export default MyAcount;
