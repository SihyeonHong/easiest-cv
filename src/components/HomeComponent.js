import { Container, Row, Col } from "react-bootstrap";

function HomeComponent({ img, intro }) {
  return (
    <Container className="tabBody">
      <Row>
        <Col style={{ textAlign: "center" }}>
          <img
            className="profileImage"
            src={
              process.env.PUBLIC_URL + "/blank-profile-picture-973460_1920.png"
            }
          />
        </Col>
        <Col>{intro}</Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
