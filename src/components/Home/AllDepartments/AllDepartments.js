import React from "react";
import "./allDepartments.scss";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../../action/productAction";
const AllDepartments = () => {
  const category = useSelector((state) => state.productReducer.category);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    const value = {
      searchKey: "",
      categoryId: id,
    };
    dispatch(setSearch(value, navigate));
  };
  return (
    <div className="AllDepartments">
      <Menu>
        {category.map((val, idx) => (
          <Menu.Item key={idx} onClick={() => handleClick(val._id)}>
            {val.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default AllDepartments;
