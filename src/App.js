import React, { useState } from "react";
import "./App.css";
import { Typography, Row, Col, notification, Card, Empty } from "antd";
import InputPrompt from "./Components/InputPrompt";
import ResponseList from "./Components/ResponseList";
import { fetchAIResponse } from "./Services/OpenAPI";

const { Title } = Typography;

function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAdd = async (newPrompt) => {
    let response;
    try {
      setLoading(true);
      response = await fetchAIResponse(newPrompt);
      const json = await response.json();
      setResponses((responses) => [
        { id: json.id, response: json.choices[0].text, prompt: newPrompt },
        ...responses,
      ]);
    } catch (err) {
      notification.error({
        message: `Error Notification`,
        description: "Network error fetching response from OpenAI",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" style={{ marginTop: "70px" }}>
      <Col xs={20} sm={16} md={12}>
        <Title>Get Inspired by AI to Write Your Own Fiction!</Title>
        <Title level={5}>Enter a prompt</Title>
        <InputPrompt onAdd={onAdd} loading={loading} />
        <Title level={4}>Responses</Title>
        {loading && <Card loading={true} style={{ marginBottom: "15px" }} />}
        {responses.length > 0 || loading ? (
          <ResponseList responses={responses} />
        ) : (
          <Empty />
        )}
      </Col>
    </Row>
  );
}

export default App;
