import {
  ShoppingCartOutlined,
  HeartOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setCart, setCompare, setWishlist } from "../../action/productAction";
import "./ProductStyle1.scss";

const ProductStyle1 = ({ id, name, img, retailPrice, type, forSale }) => {
  const dispatch = useDispatch();
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
        <ShoppingCartOutlined onClick={() => dispatch(setCart(id))} />
      </div>
      <div className="tool">
        <div className="flex" onClick={() => dispatch(setWishlist(id))}>
          <HeartOutlined />
          <p>Wishlist</p>
        </div>
        <div className="flex" onClick={() => dispatch(setCompare(id))}>
          <RetweetOutlined />
          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ProductStyle1;
