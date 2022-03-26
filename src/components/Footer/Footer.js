import { CustomerServiceOutlined } from "@ant-design/icons";
import React from "react";
import { ReactComponent as Svg } from "../../asset/logo.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="contact">
            <Svg />
            <div className="phone">
              <CustomerServiceOutlined
                style={{
                  fontSize: "60px",
                  fontWeight: "bold",
                  color: "#fed700",
                }}
              />
              <div className="text">
                <p>Got Questions ? Call us 24/7!</p>
                <h1>090 960 xxxx - 1800 2326</h1>
              </div>
            </div>

            <p className="contact">Contact Info</p>
            <div className="add">Quarter 6, Linh Xuan, Ho Chi Minh City</div>
          </div>
          <div className="linking">
            <ul>
              <p>Find It Fast</p>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>TV & Audio</li>
              <li>Gadgets</li>
              <li>Waterproof Headphones</li>
            </ul>
            <ul>
              <p>Us</p>
              <li>About</li>
              <li>Contact</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>FAQ</li>
              <li>Store Directory</li>
            </ul>
            <ul>
              <p>Customer Care</p>
              <li>My Account</li>
              <li>Track your Order</li>
              <li>Customer Service</li>
              <li>Returns/Exchange</li>
              <li>FAQs</li>
              <li>Product Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>© Electro - All Rights Reserved</p>
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
