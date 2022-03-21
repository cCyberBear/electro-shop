import { Button, Divider, Form, Input } from "antd";
import React from "react";
import "./Details.scss";
import { useSelector } from "react-redux";

const Details = () => {
  const user = useSelector((state) => state.userReducer.user);

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="Details">
      <Divider orientation="left" plain>
        <h2>Details</h2>
      </Divider>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item label="Username">
          <Input disabled value={user.username} />
        </Form.Item>
        <Form.Item label="Email">
          <Input disabled value={user.email} />
        </Form.Item>
      </Form>
      <Divider orientation="left" plain>
        <h2>Password change</h2>
      </Divider>
      <Form {...layout}>
        <Form.Item
          label="Old password"
          name="oldPassword"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="New password"
          name="newPassword"
          rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Details;
