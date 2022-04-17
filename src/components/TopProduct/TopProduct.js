import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductStyle2 from "../ProductStyle2/ProductStyle2";
import "./topProduct.scss";

const TopProduct = () => {
  const products = useSelector((state) => state.productReducer.products);
  return (
    <div className="TopProduct">
      <div className="container">
        <div className="product">
          <div className="title">
            <h1>
              Top Products
              <div className="divider"></div>
            </h1>
          </div>
          <Row>
            {products.slice(0, 8).map((val) => (
              <Col span={6}>
                <ProductStyle2 value={val} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
