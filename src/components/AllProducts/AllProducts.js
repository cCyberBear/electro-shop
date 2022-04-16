import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductStyle1 from "../ProductStyle1/ProductStyle1";
import "./AllProducts.scss";
const AllProducts = () => {
  const [pageSize] = useState(16);
  const [currentPage] = useState(1);
  const [pageProduct, setPageProduct] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  const filtered = useSelector((state) => state.productReducer.filtered);
  useEffect(() => {
    setPageProduct(products.slice(0, pageSize));
  }, [products, pageSize]);

  const handleChange = (current, pageSize) => {
    const last = current * pageSize;
    const first = last - pageSize;
    setPageProduct(products.slice(first, last));
  };
  return (
    <div className="AllProducts">
      {filtered.length ? (
        <Row>
          {filtered.map((pro, idx) => (
            <Col span={6} key={idx}>
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
      ) : (
        <>
          <Row>
            {pageProduct.map((pro, idx) => (
              <Col span={6} key={idx}>
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
            pageSize={pageSize}
            defaultCurrent={currentPage}
            total={products.length}
          />
        </>
      )}
    </div>
  );
};

export default AllProducts;
