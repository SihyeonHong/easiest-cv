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
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeAdminComponent from "./HomeAdminComponent";
import TabAdminComponent from "./TabAdminComponent";

function AdminHome() {
  const userid = useParams().userid;
  const navigate = useNavigate();
  const pdfInput = useRef(null);
  const handlePDFOpen = () => pdfInput.current.click();

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
              저장하고 로그아웃
            </Button>
            <Button variant="light" onClick={handleSignUpModalOpen}>
              회원정보수정
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
            <Nav.Link onClick={handlePDFOpen}>PDF</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled>탭 관리</Nav.Link>
          </Nav.Item>
        </Nav>
        <input type="file" ref={pdfInput} style={{ display: "none" }} />
      </Row>
      <Row>
        {activeKey === "home" ? (
          <HomeAdminComponent />
        ) : (
          <TabAdminComponent tabname={activeKey} />
        )}
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

export default AdminHome;
