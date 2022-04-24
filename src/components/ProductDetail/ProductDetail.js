import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber, Button } from "antd";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { setCompare, setWishlist, setCart } from "../../action/productAction";
import { HeartOutlined, RetweetOutlined } from "@ant-design/icons";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const selected = products.filter((pro) => pro.id === id)[0];
  const onChange = (value) => {
    setquantity(value);
  };
  return (
    <div className="ProductDetail">
      <div className="item">
        <div className="img">
          <img src={selected.img} alt="" />
        </div>
        <div className="text">
          <p className="category">
            {selected.subCategory.map((val, idx) => (
              <span key={idx}>{val.subName} </span>
            ))}
          </p>
          <p className="name">{selected.name}</p>
          {selected.quantity ? (
            <p className="avail">
              Availability: <span> {selected.quantity} in instock</span>
            </p>
          ) : (
            <p className="notavail">
              Availability: <span> out of stock</span>
            </p>
          )}

          <div className="divider"></div>
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
          <div className="descrip">{selected.description}</div>
          <p className="price">${selected.retailPrice}.00</p>
          <InputNumber
            size="large"
            min={1}
            max={selected.quantity}
            defaultValue={1}
            onChange={onChange}
          />
          <Button
            size="large"
            type="primary"
            onClick={() => dispatch(setCart(id, quantity))}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
