import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";

function App() {
  const userid = "userid".toUpperCase();
  return (
    <div className="App">
      <h1 className="mt-5 mb-5">{userid}</h1>
      <Nav
        variant="underline"
        className="nav justify-content-center"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Tab1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Tab2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="homeBody">
        <Row>
          <Col>
            <img
              src={
                process.env.PUBLIC_URL +
                "/blank-profile-picture-973460_1920.png"
              }
              style={{ maxWidth: "640px", maxHeight: "1280px" }}
            />
          </Col>
          <Col>자기소개 lorem ipsum </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
