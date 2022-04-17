import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishList } from "../../action/productAction";
import Navigation from "../Navigation/Navigation";
import "./WishList.scss";
const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const WishList = useSelector((state) => state.productReducer.wishList);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a onClick={() => navigate(`/shop/${text}`)}>{text}</a>,
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
    dispatch(removeWishList(id));
    openNotificationWithIcon("error", "Removed", "Removed from WishList table");
  };

  return (
    <div className="WishList">
      <Navigation />
      <div className="container">
        <h1>Wish List</h1>
        {WishList.length ? (
          <Table columns={columns} dataSource={WishList} />
        ) : (
          <div className="empty">
            <Button
              size="large"
              type="primary"
              onClick={() => navigate("/shop")}
            >
              Choose our masterpiece
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
