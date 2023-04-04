import {
  AimOutlined,
  InboxOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="container">
        <p>
          <a href="#">Welcome to Worldwide Electronics Store</a>
        </p>
        <ul>
          <li>
            <a href="#">
              <AimOutlined />
              Store Locator
            </a>
          </li>
          <li>
            <a href="#">
              <InboxOutlined />
              Track Your Order
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/shop")}>
              <ShoppingOutlined />
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="last-child"
              onClick={() => navigate("/my-account")}
            >
              <UserOutlined />
              My Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
