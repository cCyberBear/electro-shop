import { Alert } from "antd";
import React, { useEffect } from "react";
import "./ListUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../../action/userActions";
import { Table } from "antd";

const ListUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);
  const customer = useSelector((state) => state.userReducer.customer);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return (
    <div className="ListUser">
      {customer.length ? (
        <Table columns={columns} dataSource={customer} bordered />
      ) : (
        <Alert
          style={{ width: "100%" }}
          message="No users has been join yet."
          type="warning"
        />
      )}
    </div>
  );
};

export default ListUser;
