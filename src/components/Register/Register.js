import React from "react";
import { Form, Input, Button } from "antd";
import "./register.scss";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../action/userActions";

const Register = ({ width }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading2);

  const onFinish = (values) => {
    dispatch(register(values));
  };
  return (
    <div className="Register" style={{ width: width }}>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item>
          <h1 className="title">
            Register
            <div className="divider"></div>
          </h1>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "is not a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          <p>Sign up today and you will be able to :</p>
          <ul>
            <li>Speed your way through checkout</li>
            <li>Track your orders easily</li>
            <li>Keep a record of all your purchases</li>
          </ul>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
