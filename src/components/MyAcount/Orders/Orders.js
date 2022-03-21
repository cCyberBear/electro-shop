import { Alert } from "antd";
import React from "react";
import "./Orders.scss";
const Orders = () => {
  return (
    <div className="Orders">
      <Alert
        style={{ width: "100%" }}
        message="No order has been made yet."
        type="warning"
      />
    </div>
  );
};

export default Orders;
