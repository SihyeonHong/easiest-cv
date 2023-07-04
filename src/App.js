import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import NonAdminHome from "./components/NonAdminHome";
import AdminHome from "./components/AdminHome";
import HomeComponent from "./components/HomeComponent";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
// import TabComponent from "./components/TabComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/userid" element={<NonAdminHome userid={"userid"} />}>
          <Route path="#" element={<HomeComponent />} />
          {/* <Route path=":tab" element={<TabComponent />} /> */}
        </Route>
        <Route path="/admin" element={<AdminHome userid={"admin"} />} />
      </Routes>
    </div>
  );
}

function InitPage() {
  const [showLogin, setShowLogin] = useState(true);
  const handleLoginOpen = () => setShowLogin(true);
  const handleSignupOpen = () => setShowLogin(false);

  return (
    <Container style={{ maxWidth: "640px" }}>
      <h1 className="mt-5 mb-5">Easiest CV</h1>
      <Nav
        variant="underline"
        defaultActiveKey="login"
        className="nav-init justify-content-center"
      >
        <Nav.Item>
          <Nav.Link eventKey="login" onClick={handleLoginOpen}>
            Log In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signup" onClick={handleSignupOpen}>
            Sign Up
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>{showLogin ? <LoginForm /> : <SignupForm />}</Row>

      <a href="/userid">userid</a>
      <br></br>
      <a href="/admin">admin</a>
    </Container>
  );
}

function LoginForm() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      userid: userid,
      password: password,
    };
    console.log(data);
    /* axios.post("http://localhost:8080/login", data)
            .then((res) => {
                console.log(res);
                alert("Log in success!");
            })
            .catch((err) => {
                console.log(err);
                alert("Log in failed!");
            }); */
  };
  return (
    <Form className="body-init">
      <Form.Group controlId="formID">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ID"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="button" onClick={handleLogin}>
        Log In
      </Button>
    </Form>
  );
}

function SignupForm() {
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPW] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSignup = () => {
    const data = {
      userid: userid,
      username: username,
      email: email,
      password: password,
    };
    if (!confirmed) {
      alert("Password is not confirmed!");
    } else {
      console.log(data);
      /* axios.post("http://localhost:8080/signup", data)
        .then((res) => {
            console.log(res);
            alert("Sign up success!");
        })
        .catch((err) => {
            console.log(err);
            alert("Sign up failed!");
        }); */
    }
  };

  useEffect(() => {
    setConfirmed(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <Form className="body-init">
      <Form.Group controlId="formID">
        <Form.Label>Your ID</Form.Label>
        <div className="form-id">
          <div className="form-id-child1">https://easiest-cv.com/</div>
          <div className="form-id-child2">
            <Form.Control
              type="text"
              placeholder="your_id"
              style={{ marginLeft: "10px" }}
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
            />
          </div>
        </div>
        <Form.Text className="text-muted">
          This ID will be your domain. You CANNOT change it later.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="if you forget your password, you will receive email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          If you forget your password, you will receive email here.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPW(e.target.value)}
          className={confirmed ? "" : "unconfirmed"}
        />
      </Form.Group>

      <Button variant="dark" type="button" onClick={handleSignup}>
        Sign Up
      </Button>
    </Form>
  );
}

export default App;
