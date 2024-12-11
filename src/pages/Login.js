import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useHandleLogin from '../utils/handleLogin';

function Login() {
  // Extracting `loading`, `error`, and `handleLogin` from the custom hook.
  const { loading, error, handleLogin } = useHandleLogin(false);

  // Local state to manage form data (email and password).
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  /**
   * Handles input field changes and updates the local `formData` state.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handles form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
  };

  const location = useLocation();
  const loginFirstError = location.state?.loginFirstError;

  return (
    <>
      <section className="login-sec">
        <Container>
          <Row className="ac-row">
            {/* Left Column: Welcome Section */}
            <Col lg={6} md={6}>
              <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
                <br />
                <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
              </div>
            </Col>

            {/* Right Column: Login Form */}
            <Col lg={6} md={6}>
              <div className="LR-Form-wrapper login-frame">
                <h3>Login</h3>

                {/* Login Form */}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12}>
                      <label htmlFor="email">Email address</label><br />
                      {/* Email Input */}
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Col>

                    {/* Password Input */}
                    <Col lg={12} md={12}>
                      <label htmlFor="password">Password</label><br />
                      <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </Col>

                    {/* Remember Me and Forgot Password */}
                    <Col lg={12} md={12}>
                      <div className="forget-tab">
                        <div>
                          <label className="checkbox style-a">
                            <Form.Control type="checkbox" name="remember" id="remember" value="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <div className="checkbox__checkmark"></div>
                          </label>
                        </div>

                        {/* Forgot Password Link */}
                        <Link to="/forget-password">Forgot password?</Link>
                      </div>
                    </Col>

                    {/* Submit Button and Error Message */}
                    <Col lg={12} md={12} className="sb-btn-col1">
                      {/* Display error message if any */}
                      {(error || loginFirstError) && <p className="text-danger">{error || loginFirstError}</p>}

                      {/* Submit Button */}
                      <Form.Control type="submit" className="theme-btn6 sb-btn" value={loading ? "Signing in..." : "Sign In"} disabled={loading} />

                      {/* Link to Registration Page */}
                      <p>Don't have an account? <Link to="/register">Create free account</Link></p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
