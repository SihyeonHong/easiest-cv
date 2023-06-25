import { Container } from "react-bootstrap";

function TabComponent({ tabname }) {
  return (
    <Container className="tabBody">
      <h1>{tabname}</h1>
      <p>lorem ipsum</p>
    </Container>
  );
}

export default TabComponent;
