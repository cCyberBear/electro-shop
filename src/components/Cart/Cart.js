import React from "react";
import "./Cart.scss";
import { InputNumber, Table, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CloseCircleOutlined } from "@ant-design/icons";
import { removeCart } from "../../action/productAction";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productReducer.cart);
  console.log(cart);
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
      render: (text) => (
        <InputNumber min={1} defaultValue={text} onChange={changeAmount} />
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
  const changeAmount = (value) => {
    console.log(value);
  };
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="Cart">
      <div className="container">
        <h1>Cart</h1>
        <div className="cartPart">
          <Table columns={columns} dataSource={cart} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
