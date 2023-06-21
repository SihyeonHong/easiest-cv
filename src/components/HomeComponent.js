import { Container, Row, Col } from "react-bootstrap";

function HomeComponent() {
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
        <Col>
          자기소개 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
