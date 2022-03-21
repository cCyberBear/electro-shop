import { Menu } from "antd";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  UserOutlined,
  ShoppingOutlined,
  LogoutOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import "./LoggedManager.scss";
import Details from "../MyAcount/Details/Details";
import Orders from "../MyAcount/Orders/Orders";
import { logOut } from "../../action/userActions";
import { useDispatch } from "react-redux";
import ListUser from "../MyAcount/ListUser/ListUser";
const LoggedManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="LoggedManager">
      <h1>My Account</h1>
      <div className="content">
        <Menu style={{ width: "30%" }}>
          <Menu.Item
            onClick={() => navigate("/my-account/details")}
            icon={<UserOutlined />}>
            Account details
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/my-account/list-all-user")}
            icon={<TeamOutlined />}>
            All Users
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/my-account/orders")}
            icon={<ShoppingOutlined />}>
            Oders
          </Menu.Item>
          <Menu.Item
            onClick={() => dispatch(logOut(navigate))}
            icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
        <Routes>
          <Route exact path="details" element={<Details />}></Route>
          <Route exact path="orders" element={<Orders />}></Route>
          <Route path="list-all-user" element={<ListUser />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default LoggedManager;
