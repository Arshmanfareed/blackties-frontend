import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function Forget_password() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success handling
        setMessage('Password reset instructions have been sent to your email.');
        setError(''); // Clear any previous errors
      } else {
        // Check if error message exists from backend response
        if (data.error && data.error.message) {
          setError(data.error.message);
        } else {
          // Default error message
          setError('Something went wrong. Please try again.');
        }
        setMessage(''); // Clear any previous success message
      }
    } catch (error) {
      // Handle fetch error (network issues, etc.)
      setError('Failed to connect to the server. Please try again later.');
      setMessage(''); // Clear any previous success message
    }
  };

  return (
    <>
      <section className="forget-password-sec">
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
              <div className="LR-Form-wrapper forget-password-frame">
                <h3>Forget Password</h3>
                <p>Everyone forgets their password. Rest assured, enter your registered email address and we will send a verification code to prove it is you!</p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12}>
                      <label htmlFor="email">Email address</label><br />
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Col>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Col lg={12} md={12} className="sb-btn-col1">
                      <Form.Control
                        type="submit"
                        className="theme-btn6 sb-btn"
                        value="Send Verification Code"
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

export default Forget_password;
