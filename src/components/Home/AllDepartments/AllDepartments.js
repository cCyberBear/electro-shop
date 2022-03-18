import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./allDepartments.scss";
import { Menu } from "antd";
const AllDepartments = () => {
  return (
    <div className="AllDepartments">
      <div className="title">
        <p>
          <MenuOutlined />
          All Departments
        </p>
      </div>
      <Menu>
        <Menu.Item>Value of the Day</Menu.Item>
        <Menu.Item>Top 100 Offers</Menu.Item>
        <Menu.Item>New Arrivals</Menu.Item>
        <Menu.Item>Computers & Accessories</Menu.Item>
        <Menu.Item>Cameras, Audio & Video</Menu.Item>
        <Menu.Item>Mobiles & Tablets</Menu.Item>
        <Menu.Item>Movies, Music & Video Games</Menu.Item>
        <Menu.Item>TV & Audio</Menu.Item>
        <Menu.Item>Watches & Eyewear</Menu.Item>
        <Menu.Item>Car, Motorbike & Industrial</Menu.Item>
        <Menu.Item>Accessories</Menu.Item>
      </Menu>
    </div>
  );
};

export default AllDepartments;
