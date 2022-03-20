import React from "react";
import "./TabProduct.scss";
import { Tabs, Row, Col } from "antd";
import ProductStyle1 from "../../ProductStyle1/ProductStyle1";

const { TabPane } = Tabs;

const TabProduct = () => {
  return (
    <div className="TabProduct">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Featured" key="1">
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
        </TabPane>
        <TabPane tab="On Sale" key="2">
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
        </TabPane>
        <TabPane tab="Top Rate" key="3">
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
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabProduct;
