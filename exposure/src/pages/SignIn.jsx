
// SignInPage.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignInPage = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div className="container">
      <div className=" bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
        <Form onSubmit={handleSignIn}>
          <Row className="mb-4">
            <Col xs={8}>
              <Form.Label className="form-label font-bold mb-2">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="form-control" required />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col xs={8}>
              <Form.Label className="form-label font-bold mb-2">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className="form-control" required />
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="btn-primary">
  Sign Up
</Button>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            Don't have an account? <a href="/signup">Sign Up</a>
          </Col>
        </Row>

        </Form>

       
      </div>
    </div>
  );
};

export default SignInPage;