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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Option } = Select;
const ToolBar = () => {
  const navigate = useNavigate();
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
  const category = useSelector((state) => state.productReducer.category);
  const selectAfter = (
    <Select
      defaultValue="All categories"
      onChange={(value) => setSelect(value)}
      className="select-after"
    >
      {category.map((cat) => (
        <Option value={cat._id} key={cat._id}>
          {cat.name}
        </Option>
      ))}
    </Select>
  );

  return (
    <>
      <div className="ToolBar">
        <div className="container">
          <div className="logo" onClick={() => navigate("/")}>
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
              type="primary"
            >
              <SearchOutlined style={{ color: "black" }} />
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
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default ToolBar;
