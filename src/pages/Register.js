import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form data
  const validate = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last Name is required';
    if (!formData.username.trim()) errors.username = 'Username is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    
    if (!formData.phoneNo.trim()) {
      errors.phoneNo = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phoneNo)) {
      errors.phoneNo = 'Phone number is invalid. It should contain 10 to 15 digits and may include a country code starting with +';
    }
    
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data
    const validationErrors = validate();
    setErrors(validationErrors);
  
    // If there are errors, don't proceed
    if (Object.keys(validationErrors).length > 0) return;
  
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          username: formData.username,
          email: formData.email,
          phoneNo: formData.phoneNo,
          password: formData.password,
          confirmpassword: formData.confirmPassword
        })
      });
  
      if (response.ok) {
        const data = await response.json();  
        
        // Assuming 'data' contains the user ID and email in the response
        const createdUserId = data.data.userCreated.id; 
        const createdUserEmail = formData.email;
  
        // Save the user ID and email to localStorage
        localStorage.setItem('user_id', createdUserId);
        localStorage.setItem('user_email', createdUserEmail);
  
        setSuccess(true);
        setErrors({});
        
        // Redirect to verification page
        navigate('/verification');
      } else {
        const errorData = await response.json(); // Get the error data from response
        
        // Check if the error contains a specific message
        if (errorData.error && errorData.error.message) {
          // Set the error message in the state
          setErrors({ general: errorData.error.message }); // Display the general error message
        } else {
          setErrors({ general: 'Registration failed. Please try again.' });
        }
      }
    } catch (err) {
      console.error('Registration error:', err); 
      setErrors({ general: 'Something went wrong. Please try again.' });
    }
  };
  
  return (
    <section className="register-sec">
      <Container>
        <Row className="ac-row">
          <Col lg={6} md={6}>
            <div className="LR-Hero-wrapper">
              <h2 className="theme-h8">Welcome to our community</h2>
              <p>Are you a skilled and reliable driver looking to elevate your career? Join our prestigious team and drive for our esteemed clients, known for their professionalism and courtesy. We are seeking top-notch drivers who meet our high standards.</p>
              <br/>
              <p>To apply, please review the qualifications listed and submit your application along with the required documents. If you qualify, a member of our team will contact you.</p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="LR-Form-wrapper register-frame">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Register</h3>
                <span>Profile Details</span>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row className="row">
                  <Col lg={12} md={12}>
                    <label htmlFor="firstName">First Name</label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="lastName">Last Name</label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="username">Username</label>
                    <Form.Control
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="email">Email Address</label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="phoneNo">Phone Number</label>
                    <Form.Control
                      type="tel"
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="+44"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      isInvalid={!!errors.phoneNo}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phoneNo}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="password">Password</label>
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                  </Col>
                  <Col lg={12} md={12}>
                    <div className="agreeTC-tab">
                      <label className="checkbox style-a">
                        <Form.Control type="checkbox" name="agreeTC" id="agreeTC" />
                        <label htmlFor="agreeTC">Agree to Terms & Conditions & Privacy Policy</label>
                        <div className="checkbox__checkmark"></div>
                      </label>
                    </div>
                  </Col>
                  <Col lg={12} md={12} className="sb-btn-col1">
                  {errors.general && <p className="text-danger">{errors.general}</p>} {/* General error display */}
                    {success && <p className="text-success">Registration successful!</p>}
                    <Form.Control type="submit" className="theme-btn6 sb-btn" value="Next" />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
