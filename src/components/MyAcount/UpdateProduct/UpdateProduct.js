import React, { useEffect, useState } from "react";
import "./UpdateProduct.scss";
import { useSelector } from "react-redux";
import { Table, Alert, Button, Modal } from "antd";
import AddProduct from "../AddProduct/AddProduct";
const UpdateProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentView, setCurrentView] = useState({
    name: null,
    retailPrice: null,
    quantity: null,
    description: null,
  });
  const products = useSelector((state) => state.productReducer.products);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <h4 style={{ width: "550px" }}>{text}</h4>,
    },
    {
      title: "Price",
      dataIndex: "retailPrice",
      render: (text) => <p style={{ margin: 0 }}>${text}.00</p>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Update",
      dataIndex: "_id",
      render: (text) => (
        <Button onClick={() => openUpdate(text)} type="primary">
          Update
        </Button>
      ),
    },
  ];
  const openUpdate = (id) => {
    setIsModalVisible(true);
    const product = products.find((val) => val._id === id);
    setCurrentView(product);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="UpdateProduct">
      <Modal
        width={800}
        title="Details"
        visible={isModalVisible}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div className="modal-content">
          <AddProduct
            widthSize={"100%"}
            data={currentView}
            handleCancel={handleCancel}
          />
        </div>
      </Modal>
      {products.length ? (
        <Table
          bordered
          style={{ width: "100%" }}
          columns={columns}
          dataSource={products}
        />
      ) : (
        <Alert
          style={{ width: "100%" }}
          message="No products has been join yet."
          type="warning"
        />
      )}
    </div>
  );
};

export default UpdateProduct;
