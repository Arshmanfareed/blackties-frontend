import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import useHandleLogin from '../utils/handleLogin';

function Adminlogin() {
    // Extracting `loading`, `error`, and `handleLogin` from the custom hook.
    const { loading, error, handleLogin } = useHandleLogin(true);

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

    return (
        <>
            {/* Admin login section */}
            <section className="user-dashboard">
                <Container fluid>
                    <Row className="g-0">
                        {/* Full-width login section */}
                        <Col lg={12} md={12} className=" login_admin">
                            <div className="dashboard-panel application-panel">
                                <Row>
                                    <Col lg={12} md={12} >
                                        {/* Main login box */}
                                        <div className="login-main-bx">
                                            <div className="login-txt">
                                                {/* Logo image */}
                                                <img src="./admin_assets/images/login-logo.png" alt="logo" />
                                                <div className="login-frm">
                                                    {/* Login form */}
                                                    <form onSubmit={handleSubmit}>
                                                        <Row>
                                                            {/* Email input field */}
                                                            <Col lg={12} md={12} >
                                                                <div className="form-group">
                                                                    <label for="control-label">Email</label>
                                                                    <br />
                                                                    <input type="email" name="email" id="" placeholder="Enter your email" onChange={handleChange} />
                                                                </div>
                                                            </Col>

                                                            {/* Password input field */}
                                                            <Col lg={12} md={12} >
                                                                <div className="form-group">
                                                                    <label for="control-label">Password</label>
                                                                    <br />
                                                                    <input type="password" name="password" id="" placeholder="Enter your password" onChange={handleChange} />
                                                                    <ion-icon className="toggle-password" name="eye-outline"></ion-icon>
                                                                </div>
                                                            </Col>

                                                            {/* Submit button */}
                                                            <div className="sbmt-btn">
                                                                {/* Display error message if login fails */}
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

export default Adminlogin;
