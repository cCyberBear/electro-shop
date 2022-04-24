import { Alert, Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../action/orderAction";
import "./Orders.scss";
const Orders = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [customer, setCustomer] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentView, setCurrentView] = useState({
    user: { fullName: null, address: null, phoneNumber: null },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders(user.role));
    if (user.role === "admin") {
      setCustomer(false);
    } else {
      setCustomer(true);
    }
  }, []);
  const orders = useSelector((state) => state.orderReducer.orders);
  const view = (id) => {
    setIsModalVisible(true);
    const order = orders.find((val) => val._id === id);
    setCurrentView(order);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (text, record) => record.items.length,
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (text) => `$${text}.00`,
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
    },
  ];
  const columnsAdmin = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (text, record) => record.items.length,
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (text) => `$${text}.00`,
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
    },
    {
      title: "View",
      dataIndex: "_id",
      render: (text) => (
        <Button onClick={() => view(text)} type="primary">
          VIEW
        </Button>
      ),
    },
  ];

  const columnss = [
    {
      title: "Name",
      dataIndex: "product",
      render: (text) => text.name,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "product",
      render: (text) => `$${text.retailPrice}.00`,
    },
  ];
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="Orders">
      <Modal
        title="Details"
        visible={isModalVisible}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancle
          </Button>,
        ]}
      >
        <div className="modal-content">
          <table>
            <tr>
              <td>Name:</td>
              <td>{currentView.user.fullName}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{currentView.user.address}</td>
            </tr>
            <tr>
              <td>Phone number:</td>
              <td>{currentView.user.phoneNumber}</td>
            </tr>
          </table>
        </div>
      </Modal>
      {!orders ? (
        <Alert
          style={{ width: "100%" }}
          message="No order has been made yet."
          type="warning"
        />
      ) : (
        <Table
          bordered
          rowKey={(record) => record._id}
          expandable={{
            expandedRowRender: (record) => {
              return (
                <Table
                  bordered
                  pagination={false}
                  dataSource={record.items}
                  columns={columnss}
                ></Table>
              );
            },
          }}
          columns={customer ? columns : columnsAdmin}
          dataSource={orders}
        />
      )}
    </div>
  );
};

export default Orders;
