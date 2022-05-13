import React, { useEffect } from "react";
import { Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

const Response = ({ response, prompt }) => {
  useEffect(() => {}, []);

  return (
    <Card style={{ marginBottom: "15px" }}>
      <Row>
        <Col xs={6}>
          <Title level={5}>Prompt</Title>
        </Col>
        <Col xs={18}>
          <Typography>{prompt}</Typography>
        </Col>
        <Col xs={6}>
          <Title level={5}>Response</Title>
        </Col>
        <Col xs={18}>
          <Typography>{response}</Typography>
        </Col>
      </Row>
    </Card>
  );
};

export default Response;
