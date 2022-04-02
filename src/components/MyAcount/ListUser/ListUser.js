import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import "./ListUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer } from "../../../action/userActions";
import { Table, Button } from "antd";

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
        <Table columns={columns} dataSource={customer} />
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
