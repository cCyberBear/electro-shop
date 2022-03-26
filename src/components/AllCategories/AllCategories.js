import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilter } from "../../action/productAction";
import "./AllCategories.scss";
const AllCategories = ({ width }) => {
  const category = useSelector((state) => state.productReducer.category);
  const [openKeys, setOpenKeys] = useState([category.map((cat) => cat._id)[1]]);
  const rootSubmenuKeys = [...category.map((cat) => cat._id)];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="AllCategories" style={{ width: width }}>
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
        <Menu.Item onClick={() => dispatch(setFilter([], navigate))}>
          All products
        </Menu.Item>
        {category.map((cat) => {
          if (cat.subCategory.length) {
            return (
              <SubMenu key={cat._id} title={cat.name}>
                {cat.subCategory.map((sub) => {
                  return (
                    <Menu.Item
                      key={sub._id}
                      onClick={() => dispatch(setFilter(sub._id, navigate))}>
                      {sub.subName}
                      <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                        ({sub.total})
                      </span>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return <Menu.Item key={cat._id}>{cat.name}</Menu.Item>;
          }
        })}
      </Menu>
    </div>
  );
};

export default AllCategories;
