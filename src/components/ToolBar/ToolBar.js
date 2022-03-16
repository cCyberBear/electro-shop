import React, { useState } from "react";
import {
  MenuOutlined,
  SearchOutlined,
  RetweetOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { ReactComponent as Svg } from "../../asset/logo.svg";
import { Input, Select, Button, Popover, Drawer } from "antd";
import "./toolBar.scss";

const { Option } = Select;
const ToolBar = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onSearch = (values) => {
    console.log(values);
  };
  const selectAfter = (
    <Select
      defaultValue="All categories"
      onChange={(value) => setSelect(value)}
      className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  return (
    <>
      <div className="ToolBar">
        <div className="container">
          <div className="logo">
            <Svg />
          </div>
          <div className="search">
            <div className="menu">
              <MenuOutlined onClick={showDrawer} />
            </div>
            <Input
              onChange={(e) => setInput(e.target.value)}
              addonAfter={selectAfter}
              defaultValue={input}
            />
            <Button
              onClick={() => {
                onSearch(input + select);
              }}
              type="primary">
              <SearchOutlined />
            </Button>
          </div>
          <div className="userAction">
            <Popover placement="bottom" content={"Compare"} trigger="hover">
              <RetweetOutlined />
            </Popover>
            <Popover placement="bottom" content={"Wishlist"} trigger="hover">
              <HeartOutlined />
            </Popover>
            <Popover placement="bottom" content={"My Acount"} trigger="hover">
              <UserOutlined />
            </Popover>
            <Popover placement="bottom" content={"Cart"} trigger="hover">
              <p>
                <ShoppingOutlined />
                $0.00
              </p>
            </Popover>
          </div>
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default ToolBar;
