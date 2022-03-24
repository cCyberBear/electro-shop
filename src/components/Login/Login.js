import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.scss";
import { login } from "../../action/userActions";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ width }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading1);

  const onFinish = (values) => {
    dispatch(login(values));
  };
  return (
    <div className="Login" style={{ width: width }}>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item>
          <h1 className="title">
            Login<div className="divider"></div>
          </h1>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
