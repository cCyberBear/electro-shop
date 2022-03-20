import {
  ShoppingCartOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import React from "react";
import "./ProductStyle1.scss";

const ProductStyle1 = ({ name, image, retailPrice, forSale }) => {
  return (
    <div className="ProductStyle1">
      <p className="type">Audio Speakers</p>
      <p className="name">Wireless Audio System Multiroom 360</p>
      <div className="img">
        <img
          src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png"
          alt=""
        />
      </div>
      <div className="sop">
        <p className="price">$2,299.00</p>
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
