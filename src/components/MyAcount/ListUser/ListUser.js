import { Alert } from "antd";
import React from "react";
import "./ListUser.scss";
const ListUser = () => {
  return (
    <div className="ListUser">
      <Alert
        style={{ width: "100%" }}
        message="No users has been join yet."
        type="warning"
      />
    </div>
  );
};

export default ListUser;
