import React from "react";
import "./TabProduct.scss";
import { Tabs, Row, Col } from "antd";
import ProductStyle1 from "../../ProductStyle1/ProductStyle1";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const TabProduct = () => {
  const products = useSelector((state) => state.productReducer.products);
  const newPro1 = [...products.sort(() => 0.5 - Math.random())];
  const newPro2 = [...products.sort(() => 0.5 - Math.random())];
  return (
    <div className="TabProduct">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Featured" key="1">
          <Row>
            {products.slice(0, 8).map((pro) => (
              <Col span={6}>
                <ProductStyle1
                  name={pro.name}
                  img={pro.img}
                  retailPrice={pro.retailPrice}
                  type={pro.subCategory}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="On Sale" key="2">
          <Row>
            {newPro1.slice(0, 8).map((pro) => (
              <Col span={6}>
                <ProductStyle1
                  name={pro.name}
                  img={pro.img}
                  retailPrice={pro.retailPrice}
                  type={pro.subCategory}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="Top Rate" key="3">
          <Row>
            {newPro2.slice(0, 8).map((pro) => (
              <Col span={6}>
                <ProductStyle1
                  name={pro.name}
                  img={pro.img}
                  retailPrice={pro.retailPrice}
                  type={pro.subCategory}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabProduct;
