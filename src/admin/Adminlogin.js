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
            <section class="user-dashboard">
                <div class="container-fluid">
                    <div class="row g-0">
                        {/* <div class="col-lg-3 col-md-3 sidebar-col">
                    <Sidebar/>
                </div> */}
                        <div class="col-lg-12 col-md-12 panel-col login_admin">
                            <div class="dashboard-panel application-panel">
                                {/* <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="dashboard-panel-topbar">
                                   <Dashboardpaneltopbar/>
                                </div>
                            </div>
                        </div> */}
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="login-main-bx">
                                            <div class="login-txt">
                                                <img src="./admin_assets/images/login-logo.png" alt="logo" />
                                                <div class="login-frm">
                                                    <form onSubmit={handleSubmit}>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="form-group">
                                                                    <label for="control-label">Email</label>
                                                                    <br />
                                                                    <input type="email" name="email" id="" placeholder="Enter your email" onChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="form-group">
                                                                    <label for="control-label">Password</label>
                                                                    <br />
                                                                    <input type="password" name="password" id="" placeholder="Enter your password" onChange={handleChange} />
                                                                    <ion-icon class="toggle-password" name="eye-outline"></ion-icon>
                                                                </div>
                                                            </div>
                                                            <div class="sbmt-btn">
                                                                {error && <p className="text-danger">{error}</p>}
                                                                <Form.Control type="submit" className="theme-btn6 sb-btn submit-btn" value={loading ? "Logging in..." : "Login"} disabled={loading} />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adminlogin
