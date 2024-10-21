import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/; // Regular expression for email format
    return re.test(email);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form fields
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    } else if (!validateEmail(formData.email)) {
      setError('Email address is invalid');
      return;
    }

    if (!formData.password.trim()) {
      setError('Password is required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      
      // Debug: log the entire response to understand what the API is returning
      console.log('API Response:', response);
      console.log('API Data:', data);

      if (response.ok === true) {
        // Successful login
         // Use optional chaining or fallback to ensure values are not undefined
        const token = data.data.authToken  || 'No token';
        const username = data.data.username || data.data.first_name || 'No username';
        localStorage.setItem('token', token);
        localStorage.setItem('user_name', username);

        
        console.log('Login successful', data);
        setLoading(false);
        setError('');
        navigate('/welcome'); // Redirect after login success
      } else {
        // Handle different error messages returned from the API
        // if (response.status === 404 || data.message === 'User not found') {
        //   setError('User not found. Please register.');
        // } else if (response.status === 401 || data.message === 'Incorrect password') {
        //   setError('Password is incorrect. Please try again.');
        // } else {
        //   setError('Invalid login credentials. Please try again.');
        // }

        // Handle different error messages returned from the API
      if (data.error && data.error.message) {
        setError(data.error.message); // Set error based on API response
      } else if (response.status === 404) {
        setError('User not found. Please register.');
      } else if (response.status === 401) {
        setError('Password is incorrect. Please try again.');
      } else {
        setError('Invalid login credentials. Please try again.');
      }

        setLoading(false);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <section className="login-sec">
        <Container>
          <Row className="ac-row">
            <Col lg={6} md={6}>
              <div className="LR-Hero-wrapper">
                <h2 className="theme-h8">Welcome to our community</h2>
                <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team...</p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="LR-Form-wrapper login-frame">
                <h3>Login</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus erat amet at libero eget tincidunt lectus in velit.</p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12}>
                      <label htmlFor="email">Email address</label><br />
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Col>
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
                    <Col lg={12} md={12}>
                      <div className="forget-tab">
                        <div>
                          <label className="checkbox style-a">
                            <Form.Control type="checkbox" name="remember" id="remember" value="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <div className="checkbox__checkmark"></div>
                          </label>
                        </div>
                        <Link to="/forget-password">Forgot password?</Link>
                      </div>
                    </Col>
                    <Col lg={12} md={12} className="sb-btn-col1">
                      {error && <p className="text-danger">{error}</p>}
                      <Form.Control type="submit" className="theme-btn6 sb-btn" value={loading ? "Signing in..." : "Sign In"} disabled={loading} />
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
