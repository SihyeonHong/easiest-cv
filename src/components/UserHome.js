import {
  Nav,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Modal,
  Form,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import Tab from "./Tab";

function UserHome({ userid }) {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [tabs, setTabs] = useState(["Tab1", "Tab2"]);
  let [activeKey, setActiceKey] = useState("home");

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleSignUpModalOpen = () => setShowSignUpModal(true);
  const handleSignUpModalClose = () => setShowSignUpModal(false);

  return (
    <Container>
      <Row style={{ textAlign: "right" }}>
        <Col>
          <ButtonGroup>
            <Button variant="dark" onClick={handleLoginModalOpen}>
              Log In
            </Button>
            <Button variant="light" onClick={handleSignUpModalOpen}>
              Sign Up
            </Button>
          </ButtonGroup>
          <SignUpModal />
          <LogInModal />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="mt-5 mb-5">{userid.toUpperCase()}</h1>
        </Col>
      </Row>
      <Row>
        <Nav
          variant="underline"
          className="nav justify-content-center"
          activeKey={activeKey}
        >
          <Nav.Item>
            <Nav.Link
              eventKey="home"
              onClick={() => {
                navigate("/" + userid);
                setActiceKey("home");
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          {tabs &&
            tabs.map((tab, idx) => (
              <Nav.Item>
                <Nav.Link
                  eventKey={tab}
                  onClick={() => {
                    setActiceKey(tab);
                    //   navigate(currentPath + "/" + tab);
                  }}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          <Nav.Item>
            <Nav.Link disabled>PDF</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row>
        {activeKey === "home" ? <HomeComponent /> : <Tab tabname={activeKey} />}
      </Row>
    </Container>
  );

  function LogInModal() {
    return (
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter ID" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function SignUpModal() {
    return (
      <Modal show={showSignUpModal} onHide={handleSignUpModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Domain ID</Form.Label>
              <Form.Text className="text-muted">
                This ID will be your domain name. You CANNOT change it later.
              </Form.Text>
              <p>
                https://easiest-cv.com/
                <Form.Control type="text" placeholder="yourdomainname" />
              </p>

              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="if you forget your password, you will receive email here"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="dark" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UserHome;
