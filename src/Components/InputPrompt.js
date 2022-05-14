import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Suggestions from "./Suggestions";

const { TextArea } = Input;

const InputPrompt = ({ onAdd, loading }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd(values.prompt);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSuggestionClick = (suggestionText) => {
    form.setFieldsValue({
      prompt: suggestionText,
    });
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        name="prompt"
        rules={[{ required: true, message: "Please input a prompt!" }]}
      >
        <TextArea allowClear />
      </Form.Item>

      <Row justify="space-between">
        <Col>
          <Suggestions onSuggestionClick={onSuggestionClick} />
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InputPrompt;
