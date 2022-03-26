import { CloseCircleOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../action/productAction";
import "./MiniCart.scss";
const MiniCart = ({ id, img, quantity, price, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="MiniCart">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <p className="namee">{name}</p>
        <p className="pricee">
          {quantity} x ${price}.00
        </p>
      </div>
      <CloseCircleOutlined onClick={() => dispatch(removeCart(id))} />
    </div>
  );
};

export default MiniCart;
