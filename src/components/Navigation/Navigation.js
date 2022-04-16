import React from "react";
import "./navigation.scss";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../action/productAction";

const Navigation = () => {
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
    <div className="Navigation">
      <div className="container">
        <ul>
          {category.map((val, idx) => (
            <li key={idx} onClick={() => handleClick(val._id)}>
              {val.name}
              <DownOutlined />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
