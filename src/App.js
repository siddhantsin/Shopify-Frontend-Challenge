import "./App.css";
import { Typography, Row, Col } from "antd";
import InputPrompt from "./Components/InputPrompt";
import Responses from "./Components/Responses";

const { Title } = Typography;

function App() {
  return (
    <Row justify="center">
      <Col xs={20} sm={16} md={12}>
        <Title>AI is Cool</Title>
        <Title level={5}>Enter a prompt</Title>
        <InputPrompt />
        <Responses />
      </Col>
    </Row>
  );
}

export default App;
