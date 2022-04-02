import { Alert } from "antd";
import React, { useEffect } from "react";
import "./ListUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../../action/userActions";

const ListUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);
  const customer = useSelector((state) => state.userReducer.customer);
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
