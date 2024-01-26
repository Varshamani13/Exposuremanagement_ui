import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import '../index.css';

const SignUpPage = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
  };

  const responseGoogle = (response) => {
    // Handle the Google login response here
    console.log(response);
  };

  return (
    <div className="container">
      <div className=" bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
        <Form onSubmit={handleSignUp}>
          <Row className="mb-4">
            <Col xs={8}>
              <Form.Label className="form-label font-bold mb-2">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" className="form-control" required />
            </Col>
          </Row>
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
            Already have an account? <a href="/signin">Sign In</a>
          </Col>
        </Row>

        </Form>

       
      </div>
    </div>
  );
};

export default SignUpPage;
