import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Suggestions from "./Suggestions";

const { TextArea } = Input;

const InputPrompt = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
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
      <Form.Item name="prompt">
        <TextArea allowClear />
      </Form.Item>

      <Row justify="space-between">
        <Col>
          <Suggestions onSuggestionClick={onSuggestionClick} />
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InputPrompt;
