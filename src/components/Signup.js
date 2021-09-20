import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function Signup() {
  let history = useHistory();
  const handleSignin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <div className="login">
      <h2 align="center">SignUp here</h2>
      <Form onSubmit={handleSignin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="ConfirmPassword" />
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
