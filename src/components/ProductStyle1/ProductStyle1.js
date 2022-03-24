import {
  ShoppingCartOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import React from "react";
import "./ProductStyle1.scss";

const ProductStyle1 = ({ name, img, retailPrice, type, forSale }) => {
  return (
    <div className="ProductStyle1">
      {type.map((ty) => (
        <span className="type">{ty.subName} </span>
      ))}
      <p className="name">{name}</p>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="sop">
        <p className="price">${retailPrice}.00</p>
        <ShoppingCartOutlined />
      </div>
      <div className="tool">
        <div className="flex">
          <HeartOutlined />
          <p>Wishlist</p>
        </div>
        <div className="flex">
          <RetweetOutlined />
          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStyle1;
