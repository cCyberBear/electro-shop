import React, { useEffect, useState } from "react";
import "./Confirmation.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, Modal, notification } from "antd";
import { HashLoader } from "react-spinners";
import { updateDeliveryInfo } from "../../action/userActions";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Navigation from "../Navigation/Navigation";
import { placeOrder } from "../../action/productAction";
import { CLEAR_CART, SET_ERROR } from "../../type";
const Confirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.productReducer.cart);
  const loading = useSelector(
    (state) => state.productReducer.place_order_loading
  );
  const success = useSelector((state) => state.productReducer.success);

  const user = useSelector((state) => state.userReducer.user);
  const error = useSelector((state) => state.errorReducer.error);
  const [changeLoading, setChangeLoading] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, val) => acc + val.retailPrice * val.quantity, 0)
    );
  }, [cart]);
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
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
  useEffect(() => {
    dispatch({ type: SET_ERROR, payload: null });
    if (success) {
      dispatch({ type: CLEAR_CART });
    }
    if (error) {
      openNotificationWithIcon("error", "Fail", error);
    }
  }, [error, success]);
  const openNotificationWithIcon = (type, mes, des) => {
    notification[type]({
      message: mes,
      description: des,
    });
  };
  const placeOder = () => {
    if (!user.fullName || !user.address || !user.phoneNumber) {
      openNotificationWithIcon(
        "error",
        "Fail",
        "Please enter full shipping information"
      );
    } else {
      dispatch(placeOrder(cart));
    }
  };

  return (
    <div className="Confirmation">
      <Navigation />
      <Modal visible={changeLoading || loading} footer={null}>
        <HashLoader color="#fed700" />
      </Modal>
      <div className="container">
        {success ? (
          <div className="success">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <h1 style={{ fontSize: "70px" }}>Thanks for choosing us</h1>
            <Button type="primary" size="large" onClick={() => navigate("/")}>
              Home
            </Button>
          </div>
        ) : cart.length === 0 ? (
          <Navigate to="/shop" />
        ) : (
          <>
            <h1>Confirmation order</h1>
            <div className="flex">
              <div className="left">
                <Divider orientation="left" plain>
                  <h2>Delivery information</h2>
                </Divider>
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
              </div>
              <div className="right">
                <Divider orientation="left" plain>
                  <h2>Cart totals</h2>
                </Divider>
                <strong>Cart</strong>
                {cart.map((val, idx) => (
                  <div key={idx}>
                    <Divider />
                    <div className="flex-pad">
                      <p>
                        {val.name}
                        <span>x {val.quantity}</span>
                      </p>
                      <p>${val.retailPrice * val.quantity}.00</p>
                    </div>
                  </div>
                ))}
                <Divider />
                <div className="flex-pad">
                  <strong>Subtotal</strong>
                  <p>${totalPrice}.00</p>
                </div>
                <Divider />
                <strong>Shipping</strong>
                <Divider />
                <div className="flex-pad">
                  <p>COD</p>
                  <p>$50.00</p>
                </div>
                <Divider />
                <div className="flex-pad">
                  <strong>Total</strong>
                  <p>${totalPrice + 50}.00</p>
                </div>
                <Divider />
                <Button type="primary" size="large" onClick={placeOder}>
                  Place order
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
