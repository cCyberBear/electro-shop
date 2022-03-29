import {
  ShoppingCartOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart, setCompare, setWishlist } from "../../action/productAction";
import "./ProductStyle1.scss";
const ProductStyle1 = ({ id, name, img, retailPrice, type, forSale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openNotificationWithIcon = (type, mes, des) => {
    notification[type]({
      message: mes,
      description: des,
    });
  };
  const handleCart = (id) => {
    dispatch(setCart(id));
    openNotificationWithIcon("success", "Success", "Added to cart");
  };
  const handleCompare = (id) => {
    dispatch(setCompare(id));
    openNotificationWithIcon("success", "Success", "Added to compare table");
  };
  const handleWishList = (id) => {
    dispatch(setWishlist(id));
    openNotificationWithIcon("success", "Success", "Added to wish list");
  };
  return (
    <div className="ProductStyle1">
      <span className="type">{type[0].subName} </span>
      <p className="name" onClick={() => navigate(`/shop/${id}`)}>
        {name}
      </p>
      <div className="img" onClick={() => navigate(`/shop/${id}`)}>
        <img src={img} alt="" />
      </div>
      <div className="sop">
        <p className="price">${retailPrice}.00</p>
        <ShoppingCartOutlined onClick={() => handleCart(id)} />
      </div>
      <div className="tool">
        <div className="flex" onClick={() => handleWishList(id)}>
          <HeartOutlined />
          <p>Wishlist</p>
        </div>
        <div className="flex" onClick={() => handleCompare(id)}>
          <RetweetOutlined />
          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStyle1;
