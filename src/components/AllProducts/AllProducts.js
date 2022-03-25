import { Col, Pagination, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductStyle1 from "../ProductStyle1/ProductStyle1";
import "./AllProducts.scss";
const AllProducts = () => {
  const products = useSelector((state) => state.productReducer.products);
  function handleChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return (
    <div className="AllProducts">
      <Row>
        {products.map((pro) => (
          <Col span={6}>
            <ProductStyle1
              id={pro._id}
              name={pro.name}
              img={pro.img}
              retailPrice={pro.retailPrice}
              type={pro.subCategory}
            />
          </Col>
        ))}
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
