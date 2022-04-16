import { Button, Divider, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import "./Details.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  updateDeliveryInfo,
} from "../../../action/userActions";
import { HashLoader } from "react-spinners";

const Details = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading1);
  const [changeLoading, setChangeLoading] = useState(false);
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
  const handleDelivery = (values) => {
    dispatch(updateDeliveryInfo(values));
    setChangeLoading(true);
  };
  useEffect(() => {
    const load = setTimeout(() => {
      setChangeLoading(false);
    }, 5000);
    return () => {
      clearTimeout(load);
    };
  }, [changeLoading]);

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
        <h2>Delivery information</h2>
      </Divider>
      <Modal visible={changeLoading} footer={null}>
        <HashLoader color="#fed700" />
      </Modal>
      <Form {...layout} onFinish={handleDelivery}>
        <Form.Item label="Full name" name="fullName">
          <Input defaultValue={user.fullName} />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input defaultValue={user.address} />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { min: 10, message: "Not valid phone number" },
            { max: 10, message: "Not valid phone number" },
          ]}
        >
          <Input defaultValue={user.phoneNumber} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Change delivery information
          </Button>
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
