import { ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import "./AllCategories.scss";
const AllCategories = () => {
  return (
    <div className="AllCategories">
      <Menu mode="inline">
        <SubMenu key="sub1" icon={<ProfileOutlined />} title="All Category">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default AllCategories;
