import React, { useState } from "react";
import "./AddProduct.scss";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  Checkbox,
  Row,
  Col,
} from "antd";
import { BarcodeOutlined, UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../action/productAction";
import { FadeLoader } from "react-spinners";
const AddProduct = ({ widthSize, data }) => {
  const category = useSelector((state) => state.productReducer.category);
  const loading = useSelector((state) => state.productReducer.add_loading);
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
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
    const data = {
      ...values,
      image: selectedFileList[0],
      subCategory: JSON.stringify(values.subCategory),
    };
    dispatch(createProduct(data));
    form.resetFields();
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  };
  const handleUpload = (uploads) => {
    setSelectedFileList([uploads.file.originFileObj]);
  };
  console.log(data);
  return (
    <div className="AddProduct" style={{ width: widthSize }}>
      {loading ? (
        <FadeLoader color="#fed700" loading={loading} size={20} />
      ) : (
        <Form
          form={form}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          fields={[
            {
              name: ["name"],
              value: data ? data.name : "",
            },
            {
              name: ["retailPrice"],
              value: data ? data.retailPrice : "",
            },
            {
              name: ["quantity"],
              value: data ? data.quatity : "",
            },
            {
              name: ["quantity"],
              value: data ? data.quantity : "",
            },
            {
              name: ["subCategory"],
              value: data ? data.subCategory : "",
            },
            {
              name: ["description"],
              value: data ? data.description : "",
            },
          ]}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input value={data ? data.name : ""} />
          </Form.Item>
          <Form.Item
            name="retailPrice"
            label="Price"
            rules={[{ type: "number", min: 1, required: true }]}>
            <InputNumber addonAfter="$" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ type: "number", min: 1, required: true }]}>
            <InputNumber addonAfter={<BarcodeOutlined />} />
          </Form.Item>
          <Form.Item
            name="subCategory"
            label="Category"
            rules={[{ required: true }]}>
            <Checkbox.Group style={{ width: "100%" }} value={data.subCategory}>
              <Row>
                {category.map((val) => {
                  const subCategory = val.subCategory;
                  return subCategory.map((sub) => (
                    <Col key={sub._id} span={6}>
                      <Checkbox value={sub._id}>{sub.subName}</Checkbox>
                    </Col>
                  ));
                })}
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Upload
              fileList={selectedFileList}
              onChange={handleUpload}
              customRequest={dummyRequest}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          {!data && (
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Form.Item>
          )}
        </Form>
      )}
    </div>
  );
};

export default AddProduct;
