import { Button, Divider, Form, Input } from "antd";
import React from "react";
import "./Details.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../action/userActions";

const Details = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading1);
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const validateMessages = {
    required: "${label} is required!",
  };
  const onFinish = (values) => {
    dispatch(changePassword(values));
  };
  return (
    <div className="Details">
      <Divider orientation="left" plain>
        <h2>Details</h2>
      </Divider>
      <Form
        {...layout}
        name="nest-messages"
        validateMessages={validateMessages}
      >
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
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Old password"
          name="oldPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="New password"
          name="newPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Details;
