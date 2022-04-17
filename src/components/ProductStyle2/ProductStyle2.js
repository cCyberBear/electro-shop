import {
  HeartOutlined,
  RetweetOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { notification } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

import { setCart, setCompare, setWishlist } from "../../action/productAction";
import "./ProductStyle2.scss";
const ProductStyle2 = ({ value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compare = useSelector((state) => state.productReducer.compare);
  const [loaded, setLoaded] = useState(false);

  const openNotificationWithIcon = (type, mes, des) => {
    notification[type]({
      message: mes,
      description: des,
    });
  };
  const handleCompare = (id) => {
    if (compare.length !== 3) {
      dispatch(setCompare(id));
      openNotificationWithIcon("success", "Success", "Added to compare table");
    } else {
      openNotificationWithIcon(
        "error",
        "Error",
        "The comparison table is full"
      );
    }
  };
  const handleCart = (id) => {
    dispatch(setCart(id));
    openNotificationWithIcon("success", "Success", "Added to cart");
  };
  const handleWishList = (id) => {
    dispatch(setWishlist(id));
    openNotificationWithIcon("success", "Success", "Added to wish list");
  };
  const handleImageLoad = () => {
    setLoaded(true);
  };
  const imageStyle = !loaded ? { display: "none" } : {};

  return (
    <div className="ProductStyle2">
      <div className="details">
        <div className="img" onClick={() => navigate(`/shop/${value.id}`)}>
          {!loaded && <Loader />}
          <img
            src={value.img}
            alt=""
            style={imageStyle}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="text">
          <p className="name" onClick={() => navigate(`/shop/${value.id}`)}>
            {value.name}
          </p>
          <div className="sop">
            <p className="price">${value.retailPrice}.00</p>
            <ShoppingCartOutlined onClick={() => handleCart(value._id)} />
          </div>
        </div>
      </div>
      <div className="tool">
        <div className="flex" onClick={() => handleWishList(value._id)}>
          <HeartOutlined />
          <p>Wishlist</p>
        </div>
        <div className="flex" onClick={() => handleCompare(value._id)}>
          <RetweetOutlined />
          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStyle2;
