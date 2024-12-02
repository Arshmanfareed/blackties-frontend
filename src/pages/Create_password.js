import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

function Create_password() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const token = searchParams.get("token"); // Get token from URL

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token, // Send token in header
        },
        body: JSON.stringify({ password }), // Send new password in body
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Your password has been successfully changed.");
        setError(''); // Clear any previous errors
      } else {
        // Handle specific error messages from the backend
        if (data.error && data.error.message) {
          setError(data.error.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
        setMessage('');
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again later.");
      setMessage('');
    }
  };

  return (
    <>
      <section className="create-password-sec">
        <Container>
          <Row className="ac-row">
            <Col lg={6} md={6}>
              <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>
                  Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and
                  drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch
                  drivers who meet our high standards.
                </p>
                <p>
                  To apply, please review the qualifications listed and submit your application along with the required
                  documents. If you qualify, a member of our team will contact you.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="LR-Form-wrapper create-password-frame">
                <h3>Create Password</h3>
                <p>Please enter a new password. Make sure the password is strong and uncompromised.</p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={6}>
                      <label htmlFor="password">New Password</label>
                      <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Col>
                    <Col lg={12} md={12}>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Col>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Col lg={12} md={12} className="sb-btn-col1">
                      <Form.Control
                        type="submit"
                        className="theme-btn6 sb-btn"
                        value="Submit"
                      />
                    </Col>
                  </Row>
                </Form>

                {/* Display success or error message */}
                {message && <p style={{ color: 'green' }}>{message}</p>}
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Create_password;