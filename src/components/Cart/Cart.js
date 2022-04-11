import React, { useState } from "react";
import "./Cart.scss";
import { InputNumber, Table, notification, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseCircleOutlined } from "@ant-design/icons";
import { removeCart, setCartReplace } from "../../action/productAction";
const Cart = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productReducer.cart);
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
    // dispatch(setCart(record.id, value)
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
      <div className="container">
        <h1>Cart</h1>
        <div className="cartPart">
          <Table columns={columns} dataSource={cart} />
          <div className="totalCount">
            <Divider orientation="left">
              <h3>Cart totals</h3>
            </Divider>
            <div className="flex-pad">
              <strong>Subtotal</strong>
              <p>$4,399.00</p>
            </div>
            <Divider />
            <strong>Shipping</strong>
            <div className="flex-pad">
              <p>
                Shipping to <span>CA</span>
              </p>
              <p>$4,399.00</p>
            </div>
            <Divider />
            <div className="flex-pad">
              <strong>Total</strong>
              <p>$4,399.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
