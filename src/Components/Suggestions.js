import React from "react";
import { Button, Row, Col } from "antd";

const SUGGESTION_LIST = [
  {
    id: 1,
    text: "Write a brave story about Zeus",
  },
  {
    id: 2,
    text: "Write a diary entry of a teenager in Dubai",
  },
  {
    id: 3,
    text: "Describe the last moments of Romeo and Juliet",
  },
];

const Suggestions = ({ onSuggestionClick }) => {
  const onClick = (e) => {
    onSuggestionClick(e.target.innerText);
  };

  return (
    <Row style={{ marginBottom: "20px" }}>
      {SUGGESTION_LIST.map((prompt) => (
        <Col key={prompt.id}>
          <Button shape="round" onClick={onClick} style={{ margin: 2 }}>
            {prompt.text}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Suggestions;
