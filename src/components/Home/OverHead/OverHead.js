import React from "react";
import "./overhead.scss";
import { MenuOutlined } from "@ant-design/icons";

const OverHead = () => {
  return (
    <div className="OverHead">
      <div className="title">
        <p>
          <MenuOutlined />
          All Departments
        </p>
      </div>
      {/* <div className="navigator">
          <div className="left">
              <ul>
                  <li className="red">
                  All Pages <DownOutlined />
                  </li>
                  <li>
                  Featured Brands  
                  </li>
                  <li>
                  Trending Styles
                  </li>
                  <li>
                  Gift Cards
                  </li>
              </ul>
          </div>
          <div className="right">
              <li>Free Shipping on Orders $50+</li>
          </div>
      </div> */}
    </div>
  );
};

export default OverHead;
