import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../index.css";
function Login() {
  let history = useHistory();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem(user, JSON.stringify({ username: {} }));
    history.push("/dashboard");
  };
  return (
    <div className="login">
      <h2 align="center">Login here</h2>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
