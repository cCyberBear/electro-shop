import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, notification, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCompare } from "../../action/productAction";
import Navigation from "../Navigation/Navigation";
import "./Compare.scss";
const Compare = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compare = useSelector((state) => state.productReducer.compare);

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

  const TableProduct = ({ value }) => {
    return (
      <table>
        <tr>
          <td>{value.name}</td>
        </tr>
        <tr>
          <td>
            <img
              style={{ width: "200px", display: "inline-block" }}
              src={value.img}
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td style={{ height: "70px" }}>
            {value.subCategory.map((val) => (
              <span>|{val.subName}|</span>
            ))}
          </td>
        </tr>
        <tr>
          <td style={{ height: "150px" }}>{value.description}</td>
        </tr>
        <tr>
          <td>${value.retailPrice}.00</td>
        </tr>
        <tr>
          <td>
            <CloseCircleOutlined
              style={{ color: "red", fontSize: "30px" }}
              onClick={() => handleRemove(value.id)}
            />
          </td>
        </tr>
      </table>
    );
  };
  return (
    <div className="Compare">
      <Navigation />
      <div className="container">
        <h1>Compare</h1>
        {compare.length ? (
          <table>
            {compare.map((val) => (
              <th>
                <TableProduct value={val} />
              </th>
            ))}
          </table>
        ) : (
          <div className="empty">
            <Button
              size="large"
              type="primary"
              onClick={() => navigate("/shop")}
            >
              Select products to compare
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
