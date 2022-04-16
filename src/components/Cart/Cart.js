import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { InputNumber, Table, notification, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseCircleOutlined } from "@ant-design/icons";
import { removeCart, setCartReplace } from "../../action/productAction";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((acc, val) => acc + val.retailPrice * val.quantity, 0)
    );
  }, [cartItems]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => <img width={100} src={img} alt="" />,
    },
    {
      title: "Price",
      dataIndex: "retailPrice",
      sorter: {
        compare: (a, b) => a.retailPrice - b.retailPrice,
        multiple: 1,
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "id",
      render: (text, record) => (
        <InputNumber
          min={1}
          defaultValue={text}
          onChange={(value) => dispatch(setCartReplace(record.id, value))}
        />
      ),
    },
    {
      title: "Total",
      dataIndex: ["quantity", "retailPrice"],
      key: "id",
      render: (text, record) => <p>{record.quantity * record.retailPrice}</p>,
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <CloseCircleOutlined
          style={{ color: "red", fontSize: "30px" }}
          onClick={() => handleRemove(id)}
        />
      ),
    },
  ];
  const openNotificationWithIcon = (type, mes, des) => {
    notification[type]({
      message: mes,
      description: des,
    });
  };
  const handleRemove = (id) => {
    dispatch(removeCart(id));
    openNotificationWithIcon("error", "Removed", "Removed from cart");
  };

  return (
    <div className="Cart">
      <Navigation />
      <div className="container">
        <h1>Cart</h1>
        <h2>Total: ${totalPrice}.00 </h2>
        <Table
          columns={columns}
          dataSource={cartItems}
          pagination={{ position: ["bottomLeft"] }}
        />
        <Button
          size="large"
          type="primary"
          onClick={() => navigate("/confirm")}
        >
          Check out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
