import React, { useEffect, useState } from "react";
import "./AddProduct.scss";
import ImgCrop from "antd-img-crop";
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
import { BarcodeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../action/productAction";
import { FadeLoader } from "react-spinners";
const AddProduct = ({ widthSize, data, handleCancel }) => {
  const category = useSelector((state) => state.productReducer.category);
  const loading = useSelector((state) => state.productReducer.add_loading);
  const [selectedFileList, setSelectedFileList] = useState([]);
  useEffect(() => {
    if (data) {
      setSelectedFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: data.img,
        },
      ]);
    }
  }, [data]);

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
      image: selectedFileList[0].originFileObj,
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
  const handleUpload = (newFileList) => {
    setSelectedFileList(newFileList.fileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const handleSave = (id) => {
    const formdata = form.getFieldValue();
    const data = {
      ...formdata,
      image: selectedFileList[0].originFileObj,
      subCategory: JSON.stringify(formdata.subCategory),
    };
    dispatch(updateProduct(id, data));
    setTimeout(() => {
      if (!loading) {
        handleCancel();
      }
    }, 1000);
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setTimeout(() => {
      if (!loading) {
        handleCancel();
      }
    }, 1000);
  };
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
              value: data ? data.quantity : "",
            },
            {
              name: ["subCategory"],
              value: data ? [...data.subCategory.map((val) => val._id)] : "",
            },
            {
              name: ["description"],
              value: data ? data.description : "",
            },
          ]}
        >
          <Form.Item name="image" label="Image">
            <ImgCrop rotate>
              <Upload
                fileList={selectedFileList}
                listType="picture-card"
                onChange={handleUpload}
                customRequest={dummyRequest}
                onPreview={onPreview}
              >
                {selectedFileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input value={data ? data.name : ""} />
          </Form.Item>
          <Form.Item
            name="retailPrice"
            label="Price"
            rules={[{ type: "number", min: 1, required: true }]}
          >
            <InputNumber addonAfter="$" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ type: "number", min: 1, required: true }]}
          >
            <InputNumber addonAfter={<BarcodeOutlined />} />
          </Form.Item>
          <Form.Item
            name="subCategory"
            label="Category"
            rules={[{ required: true }]}
          >
            <Checkbox.Group style={{ width: "100%" }}>
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

          {!data ? (
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Form.Item>
          ) : (
            <Form.Item>
              <div className="grpp-btn">
                <Button
                  htmlType="button"
                  size="large"
                  type="primary"
                  key="save"
                  onClick={() => handleSave(data._id)}
                >
                  Save
                </Button>
                <Button
                  onClick={() => handleDelete(data._id)}
                  size="large"
                  type="primary"
                  key="delete"
                >
                  Delete
                </Button>
              </div>
            </Form.Item>
          )}
        </Form>
      )}
    </div>
  );
};

export default AddProduct;
