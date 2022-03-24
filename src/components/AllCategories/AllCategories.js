import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AllCategories.scss";
const AllCategories = () => {
  const category = useSelector((state) => state.productReducer.category);
  const [openKeys, setOpenKeys] = useState([category.map((cat) => cat._id)[1]]);
  const rootSubmenuKeys = [...category.map((cat) => cat._id)];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="AllCategories">
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
        {category.map((cat) => {
          if (cat.subCategory.length) {
            return (
              <SubMenu key={cat._id} title={cat.name}>
                {cat.subCategory.map((sub) => {
                  return (
                    <Menu.Item key={sub._id}>
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
