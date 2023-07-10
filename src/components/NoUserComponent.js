import { Container, Row } from "react-bootstrap";

function NoUserComponent() {
  return (
    <Container className="tabBody">
      <Row style={{ textAlign: "center" }}>
        <h1>No Such User</h1>
      </Row>
    </Container>
  );
}

export default NoUserComponent;
