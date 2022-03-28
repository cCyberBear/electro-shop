import React from "react";
import "./header.scss";
import {
  AimOutlined,
  InboxOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="container">
        <p>
          <a>Welcome to Worldwide Electronics Store</a>
        </p>
        <ul>
          <li>
            <a>
              <AimOutlined />
              Store Locator
            </a>
          </li>
          <li>
            <a>
              <InboxOutlined />
              Track Your Order
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/shop")}>
              <ShoppingOutlined />
              Shop
            </a>
          </li>
          <li>
            <a className="last-child" onClick={() => navigate("/my-account")}>
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
