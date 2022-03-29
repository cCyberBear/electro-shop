import { CloseCircleOutlined } from "@ant-design/icons";
import { notification, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCompare } from "../../action/productAction";
import Navigation from "../Navigation/Navigation";
import "./Compare.scss";
const Compare = () => {
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.productReducer.compare);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => <img width={200} src={img} alt="" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Price",
      dataIndex: "retailPrice",
      key: "retailPrice",
      render: (text) => (
        <strong style={{ fontSize: "25px" }}>${text}.00</strong>
      ),
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
    dispatch(removeCompare(id));
    openNotificationWithIcon("error", "Removed", "Removed from compare table");
  };

  return (
    <div className="Compare">
      <Navigation />
      <div className="container">
        <Table columns={columns} dataSource={compare} />
      </div>
    </div>
  );
};

export default Compare;
