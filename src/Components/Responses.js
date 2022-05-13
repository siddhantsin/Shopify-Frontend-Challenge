import React, { useEffect } from "react";
import { Card, Typography, Row, Col } from "antd";
import { fetchAIResponse } from "../Services/OpenAPI";

const { Title } = Typography;

const Responses = () => {
  useEffect(() => {}, []);

  return (
    <Card>
      <Row>
        <Col xs={6}>
          <Title level={5}>Prompt</Title>
        </Col>
        <Col xs={18}>
          <Typography>Some prompt that is quite big in sizw</Typography>
        </Col>
        <Col xs={6}>
          <Title level={5}>Response</Title>
        </Col>
        <Col xs={18}>
          <Typography>Some response that is quite big in sizw</Typography>
        </Col>
      </Row>
    </Card>
  );
};

export default Responses;
