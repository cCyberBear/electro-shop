import React from "react";
import "./signUpMail.scss";
import { MailOutlined } from "@ant-design/icons";

const SignUpMail = () => {
  return (
    <div className="SignUpMail">
      <div className="container">
        <div className="msg1">
          <MailOutlined style={{ marginRight: "20px" }} />
          Sign up to Newsletter
        </div>
        <div className="msg">
          ...and receive <span>$20 coupon for first shopping</span>
        </div>
        <div className="send">
          <input placeholder="Enter your Email address" type="text" />
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpMail;
