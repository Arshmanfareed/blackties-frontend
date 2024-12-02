import React, { useState } from 'react';
import DashboardSidebar from '../dashboard/partials/dashboard-sidebar'
import Dashboardpaneltopbar from './partials/Dashboardpaneltopbar'
import Sidebar from './partials/Sidebar'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Adminlogin() {
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
                const role = data.data.role || 'No user';
                if (role === 'ADMIN') {
                    // Successful login
                    // Use optional chaining or fallback to ensure values are not undefined
                    const token = data.data.authToken || 'No token';
                    const username = data.data.username || data.data.first_name || 'No username';
                    localStorage.setItem('token', token);
                    localStorage.setItem('user_name', username);


                    console.log('Login successful', data);
                    setLoading(false);
                    setError('');
                    navigate('/welcome'); // Redirect after login success
                } else {
                    setError('You cannot login as admin');
                }
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
            <section className="user-dashboard">
                <Container fluid>
                    <Row className="g-0">
                    
                        <Col lg={12} md={12} className=" login_admin">
                            <div className="dashboard-panel application-panel">
                           
                                <Row>
                                    <Col lg={12} md={12} >
                                        <div className="login-main-bx">
                                            <div className="login-txt">
                                                <img src="./admin_assets/images/login-logo.png" alt="logo" />
                                                <div className="login-frm">
                                                    <form onSubmit={handleSubmit}>
                                                        <Row>
                                                            <Col lg={12} md={12} >
                                                                <div className="form-group">
                                                                    <label for="control-label">Email</label>
                                                                    <br />
                                                                    <input type="email" name="email" id="" placeholder="Enter your email" onChange={handleChange} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12} md={12} >
                                                                <div className="form-group">
                                                                    <label for="control-label">Password</label>
                                                                    <br />
                                                                    <input type="password" name="password" id="" placeholder="Enter your password" onChange={handleChange} />
                                                                    <ion-icon className="toggle-password" name="eye-outline"></ion-icon>
                                                                </div>
                                                            </Col>
                                                            <div className="sbmt-btn">
                                                                {error && <p className="text-danger">{error}</p>}
                                                                <Form.Control type="submit" className="theme-btn6 sb-btn submit-btn" value={loading ? "Logging in..." : "Login"} disabled={loading} />
                                                            </div>
                                                        </Row>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Adminlogin