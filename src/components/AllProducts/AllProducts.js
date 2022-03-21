import { Col, Pagination, Row } from "antd";
import React from "react";
import ProductStyle1 from "../ProductStyle1/ProductStyle1";
import "./AllProducts.scss";
const AllProducts = () => {
  function handleChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return (
    <div className="AllProducts">
      <Row>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
        <Col span={6}>
          <ProductStyle1 />
        </Col>
      </Row>
      <Pagination
        style={{ margin: "10px auto", width: "fit-content" }}
        showSizeChanger={false}
        onChange={handleChange}
        pageSize={8}
        defaultCurrent={1}
        total={100}
      />
    </div>
  );
};

export default AllProducts;
