import React from "react";
import "./header.scss";
import {
  AimOutlined,
  InboxOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <p>
          <a href="">Welcome to Worldwide Electronics Store</a>
        </p>
        <ul>
          <li>
            <a href="">
              <AimOutlined />
              Store Locator
            </a>
          </li>
          <li>
            <a href="">
              <InboxOutlined />
              Track Your Order
            </a>
          </li>
          <li>
            <a href="">
              <ShoppingOutlined />
              Shop
            </a>
          </li>
          <li>
            <a className="last-child" href="">
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
